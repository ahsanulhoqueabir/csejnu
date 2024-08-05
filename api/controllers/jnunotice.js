const Notices = require("../models/jnunotice");
const axios = require("axios");
const cheerio = require("cheerio");
const fetchTable = async (req, res) => {
  const url = "https://jnu.ac.bd/portal/noticeview/1";
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const table = $("table");
    const data = [];
    table.find("tr").each((i, el) => {
      if (i === 0) return true;
      const tds = $(el).find("td");
      const title = tds.eq(2).text();
      const date = new Date(tds.eq(1).text());
      const link = tds.eq(3).find("a").attr("href");
      data.push({ title, date, link });
    });
    const latest = data.slice(0, 10);
    const allPromise = latest.map(async (not) => {
      const notice = await Notices.findOne({ link: not.link });
      if (!notice) {
        const ne = new Notices(not);
        await ne.save();
      }
    });
    await Promise.all(allPromise);
    res.send({
      status: 200,
      message: "Notices Fetched",
    });
  } catch (err) {
    res.send({
      status: 500,
      message: "Internal Server Error",
      error: err,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const limit = req.query.limit || 15;
    const page = req.query.page || 1;
    const skip = (page - 1) * limit;

    const data = await Notices.find(
      {},
      {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      }
    )
      .skip(skip)
      .limit(parseInt(limit));
    res.send(data);
  } catch (err) {
    res.send({
      status: 500,
      message: "Internal Server Error",
      error: err,
    });
  }
};
module.exports = {
  fetchTable,
  getAll,
};
