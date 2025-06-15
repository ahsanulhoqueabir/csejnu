const addNoticeFields = [
  {
    type: "text",
    name: "title",
    placeholder: "Enter the title",
    label: "Enter the title",
  },
  {
    type: "select",
    name: "code",
    label: "Course Name",
    options: [
      {
        placeholder: "Digital Logic Design",
        value: "CC2103",
      },
      {
        placeholder: "Digital Logic Design Lab",
        value: "CC2104",
      },
      {
        placeholder: "Introduction to Statistic and Probability",
        value: "CC2106",
      },
      {
        placeholder: "Data Communication Lab",
        value: "CC2108",
      },
      {
        placeholder: "Object Oriented Programming-II",
        value: "CC2101",
      },
      {
        placeholder: "Math- III (Ordinary differential Equation)",
        value: "CC2105",
      },
      {
        placeholder: "Object Oriented Programming-II Lab",
        value: "CC2102",
      },
      {
        placeholder: "Data Communication",
        value: "CC2107",
      },
      {
        placeholder: "Financial and Managerial Accounting",
        value: "CC2109",
      },
      {
        placeholder: "Others",
        value: "CC0001",
      },
    ],
  },
  {
    type: "date",
    name: "date",
    placeholder: "Enter the date",
    label: "Select the date",
  },
  {
    type: "time",
    name: "time",
    placeholder: "Enter the time",
    label: "Select the time",
  },
  {
    type: "select",
    name: "room",
    placeholder: "Select the room",
    label: "Select the room",
    options: [
      {
        placeholder: "SW Lab-1: Software Lab-1 (5th Floor)",
        value: "SW Lab-1: Software Lab-1 (5th Floor)",
      },
      {
        placeholder: "SW Lab-2: Software Lab-2 (6th Floor)",
        value: "SW Lab-2: Software Lab-2 (6th Floor)",
      },
      {
        placeholder: "Room-721",
        value: "Room-721",
      },
      {
        placeholder: "Hardware Lab: 5th Floor",
        value: "Hardware Lab: 5th Floor",
      },
      {
        placeholder: "Room-601",
        value: "Room-601",
      },
      {
        placeholder: "Room-712",
        value: "Room-712",
      },
      {
        placeholder: "VC Room",
        value: "VC Room",
      },
      {
        placeholder: "Other",
        value: "Other",
      },
    ],
  },
  {
    type: "text",
    name: "description",
    placeholder: "Write the description",
    label:
      "Write the description. Each fullstop will be considered as a new line.",
  },
  {
    type: "text",
    name: "tag",
    placeholder: "Write the tag",
    default: "Class",
    label: "Write  tags separated by commas(At most 3)",
  },
];

export { addNoticeFields };
