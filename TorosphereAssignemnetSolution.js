const data = {
  "Exam Fee": {
    INDIAN: {
      "​ALL_COURSES​": {
        "​ALL_LEVEL​": {
          amount: 400,
        },
      },
    },
    FOREIGN: {
      "​ALL_COURSES​": {
        "​ALL_LEVEL​": {
          amount: 100,
        },
      },
    },
    NRI: {
      "​ALL_COURSES​": {
        "​ALL_LEVEL​": {
          amount: 600,
        },
      },
    },
    SAARC: {
      "​ALL_COURSES​": {
        "​ALL_LEVEL​": {
          amount: 600,
        },
      },
    },
  },
  "Application Fee": {
    INDIAN: {
      "​ALL_COURSES​": {
        UG: {
          amount: 200,
        },
        "UG-DIPLOMA": {
          amount: 300,
        },
        PG: {
          amount: 500,
        },
      },
    },
    FOREIGN: {
      "​ALL_COURSES​": {
        UG: {
          amount: 400,
        },
        "UG-DIPLOMA": {
          amount: 400,
        },
        PG: {
          amount: 700,
        },
      },
    },
  },
};

const user = {
  fee: "Application Fee",
  nationality: "FOREIGN",
  course: "Medical",
  level: "UG-DIPLOMA",
};

let totalFee = 0;
if (user.fee === "Exam Fee") {
  if (user.nationality === "INDIAN") {
    if (
      (user.course === "Medical" ||
        user.course === "Dental" ||
        user.course === "Ayurveda") &&
      (user.level === "UG" ||
        user.level === "PG" ||
        user.level === "UG-DIPLOMA")
    ) {
      totalFee +=
        data["Exam Fee"].INDIAN["​ALL_COURSES​"]["​ALL_LEVEL​"].amount;
    }
  } else if (user.nationality === "FOREIGN") {
    if (
      (user.course === "Medical" ||
        user.course === "Dental" ||
        user.course === "Ayurveda") &&
      (user.level === "UG" ||
        user.level === "PG" ||
        user.level === "UG-DIPLOMA")
    ) {
      totalFee +=
        data["Exam Fee"].FOREIGN["​ALL_COURSES​"]["​ALL_LEVEL​"].amount;
    }
  } else if (user.nationality === "NRI") {
    if (
      (user.course === "Medical" ||
        user.course === "Dental" ||
        user.course === "Ayurveda") &&
      (user.level === "UG" ||
        user.level === "PG" ||
        user.level === "UG-DIPLOMA")
    ) {
      totalFee += data["Exam Fee"].NRI["​ALL_COURSES​"]["​ALL_LEVEL​"].amount;
    }
  } else if (user.nationality === "SAARC") {
    if (
      (user.course === "Medical" ||
        user.course === "Dental" ||
        user.course === "Ayurveda") &&
      (user.level === "UG" ||
        user.level === "PG" ||
        user.level === "UG-DIPLOMA")
    ) {
      totalFee += data["Exam Fee"].SAARC["​ALL_COURSES​"]["​ALL_LEVEL​"].amount;
    }
  }
}
// Application Fee
else {
  if (user.nationality === "INDIAN") {
    if (
      user.course === "Medical" ||
      user.course === "Dental" ||
      user.course === "Ayurveda"
    ) {
      if (user.level === "UG") {
        totalFee += data["Application Fee"].INDIAN["​ALL_COURSES​"].UG.amount;
      } else if (user.level === "UG-DIPLOMA") {
        totalFee +=
          data["Application Fee"].INDIAN["​ALL_COURSES​"]["UG-DIPLOMA"].amount;
      } else if (user.level === "PG") {
        totalFee += data["Application Fee"].INDIAN["​ALL_COURSES​"].PG.amount;
      } else {
        console.log("Please enter a valid level");
      }
    }
  } else if (user.nationality === "FOREIGN") {
    if (
      user.course === "Medical" ||
      user.course === "Dental" ||
      user.course === "Ayurveda"
    ) {
      if (user.level === "UG") {
        totalFee += data["Application Fee"].FOREIGN["​ALL_COURSES​"].UG.amount;
      } else if (user.level === "UG-DIPLOMA") {
        totalFee +=
          data["Application Fee"].FOREIGN["​ALL_COURSES​"]["UG-DIPLOMA"].amount;
      } else if (user.level === "PG") {
        totalFee += data["Application Fee"].FOREIGN["​ALL_COURSES​"].PG.amount;
      } else {
        console.log("Please enter a valid level");
      }
    }
  }
}
console.log("Total Fee for the user is : ", totalFee);
