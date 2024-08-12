const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultySchema = new Schema(
  {
    dept_id: {
      type: String, // D0305 for CSE
      required: true,
      default: "D0305",
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    teacher_id: {
      type: String,
    },
    position: {
      type: String,
    },
    personal: {
      name: {
        fullName: {
          type: String,
        },
        nickname: {
          type: String,
        },
      },
      about: { type: String },
      blood: { type: String },
      gender: { type: String }, // male,female
      birthday: { type: Date },
      religion: { type: String },
      photo: { type: String },
      email: { type: String, required: true, unique: true, trim: true },
      phone: { type: String },
      portfolio: { type: String },
      resume: { type: String },
      language: [{ type: String }],
      height: { type: String },
      weight: { type: String },
      complexion: { type: String },
      bodyType: { type: String },
      eyeSight: { type: String },
      hairColor: { type: String },
    },
    social: [
      {
        platform: { type: String }, // facebook,instagram,linkedin,
        username: { type: String },
      },
    ],
    profiles: [
      {
        title: { type: String },
        link: { type: String },
        description: { type: String },
      },
    ],
    awards: [
      {
        title: { type: String, required: true },
        photo: { type: String },
        date: { type: Date },
        organization: { type: String },
        description: { type: String },
      },
    ],
    publications: [
      {
        title: { type: String },
        url: { type: String },
        date: { type: Date },
        publisher: { type: String },
        description: { type: String },
      },
    ],
    certificates: [
      {
        title: { type: String, required: true },
        url: { type: String },
        issuingAuthority: { type: String },
        date: { type: Date },
        year: { type: String },
        description: { type: String },
      },
    ],
    family: [
      {
        name: { type: String },
        relation: { type: String }, // father,mother,brother,sister
        dob: { type: Date },
        blood: { type: String },
        phone: { type: String },
        email: { type: String },
        profession: { type: String },
        photo: { type: String },
      },
    ],
    addressInfo: {
      current: {
        location: { type: String },
        thana: { type: String },
        upazilla: { type: String },
        zipcode: { type: String },
        city: { type: String },
        zilla: { type: String, default: "Dhaka" },
        division: { type: String, default: "Dhaka" },
        country: { type: String, default: "Bangladesh" },
      },
      permanent: {
        location: { type: String },
        thana: { type: String },
        upazilla: { type: String },
        zipcode: { type: String },
        city: { type: String },
        zilla: { type: String },
        division: { type: String },
        country: { type: String, default: "Bangladesh" },
      },
    },
    education: [
      {
        level: { type: String }, // school,college,university
        ID: { type: String },
        background: { type: String, default: "science" }, // science,commerce,arts
        institution: { type: String },
        major: { type: String },
        result: { type: Number }, // gpa
        passingYear: { type: Number },
        startYear: { type: Number },
        edumail: { type: String },
        board: { type: String },
        degree: { type: String }, // BSc,SSC,HSC
      },
    ],
    experience: [
      {
        role: { type: String },
        institution: { type: String },
        start: { type: Date },
        end: { type: Date },
        description: { type: String },
      },
    ],
    membership: [
      {
        position: { type: String },
        organization: { type: String },
        start: { type: Date },
        end: { type: Date },
        description: { type: String },
      },
    ],
    scholarships: [
      {
        title: { type: String },
        organization: { type: String },
        start: { type: Date },
        end: { type: Date },
        description: { type: String },
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Faculty", facultySchema);
