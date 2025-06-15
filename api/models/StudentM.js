// import mongoose from "mongoose";
const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema(
  {
    platform: { type: String }, // it should be always in lowercase eg. facebook,instagram,telegram
    username: { type: String },
  },
  {
    _id: false,
    timestamps: false,
  }
);
const studentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    batch: { type: String, required: true }, // B210305
    role: { type: String, default: "student" },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    personal: {
      name: {
        fullName: { type: String },
        nickname: { type: String },
      },
      about: { type: String },
      blood: { type: String },
      gender: { type: String }, // male,female
      birthday: { type: Date },
      religion: { type: String },
      photo: { type: String },
      email: { type: String, required: true, unique: true },
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
    social: [
      {
        platform: { type: String }, // facebook,instagram,linkedin,
        username: { type: String },
        link: { type: String },
      },
    ],
    codingProfile: [
      {
        platform: { type: String }, // codeforces,codechef,leetcode
        handle: { type: String },
      },
    ],
    profiles: {
      social: {
        type: Map,
        of: ProfileSchema,
      },
      coding: {
        type: Map,
        of: ProfileSchema,
      },
    },
    skills: [{ type: String }],
    hobby: [{ type: String }],
    achievements: {
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
          title: { type: String, required: true },
          url: { type: String, required: true },
          date: { type: Date },
          publisher: { type: String },
        },
      ],
      certificates: [
        {
          title: { type: String, required: true },
          url: { type: String, required: true },
          issuingAuthority: { type: String },
          date: { type: Date },
        },
      ],
    },
    results: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Result",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// module.exports = mongoose.model("Student", studentSchema, "cse13batch");
module.exports = mongoose.model("Student", studentSchema);
