import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { getSemester } from "../../../utility/functions";

const ResultPDF = ({ data, info }) => {
  const { results, cumulative, semester, summary } = data;
  const { personal } = info;

  useEffect(() => {
    // console.log(data);
  }, [data]);

  const generateData = () => {
    let result = [];
    results.forEach((course) => {
      result.push([
        course.course.CourseCode,
        course.course.CourseTitle,
        course.course.Credit,
        course.course.CourseType,
        course.course.courseTeacher,
        course.lg,
        course.gp,
      ]);
    });
    return result;
  };
  const generatePDF = () => {
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();

      // Set title
      doc.setFontSize(18);
      const title = getSemester(semester);
      const textWidth =
        (doc.getStringUnitWidth(title) * doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      const x = (pageWidth - textWidth) / 2;
      doc.text(title, x, 20);

      // Basic Info
      const department = "Computer Science & Engineering";
      doc.setFontSize(14);
      doc.text(`Name: ${personal.name.fullName}`, 10, 40);
      doc.text(`ID: ${info.id}`, 10, 47);
      doc.text(`Department: ${department}`, 10, 54);

      // Summary Section (left side)
      const summaryX = 10; // X position for the left column
      let yPosition = 65; // Starting Y position

      doc.setFontSize(12);
      doc.text("Summary:", summaryX, yPosition);
      yPosition += 5;
      doc.setFontSize(10);
      doc.text(`Total Grade Point: ${summary.tgp}`, summaryX, yPosition);
      yPosition += 5;
      doc.text(`Grade Point Average: ${summary.gpa}`, summaryX, yPosition);
      yPosition += 5;
      doc.text(`Grade Point (Letter): ${summary.lg}`, summaryX, yPosition);
      if (cumulative && cumulative.cgpa) {
        // Cumulative Section (right side)
        const cumulativeX = pageWidth / 2 + 10; // X position for the right column
        yPosition = 65; // Reset Y position for cumulative

        doc.setFontSize(12);
        doc.text("Cumulative:", cumulativeX, yPosition);
        yPosition += 5;
        doc.setFontSize(10);
        doc.text(
          `Sum of Previous Semesters TGP: ${cumulative.prev_tgp}`,
          cumulativeX,
          yPosition
        );
        yPosition += 5;
        doc.text(
          `Total Grade Point (TGP): ${cumulative.tgp}`,
          cumulativeX,
          yPosition
        );
        yPosition += 5;
        doc.text(
          `Total Credit Point (TCP): ${cumulative.tcp}`,
          cumulativeX,
          yPosition
        );
        yPosition += 5;
        doc.text(
          `Earned Credit Point (ECP): ${cumulative.ecp}`,
          cumulativeX,
          yPosition
        );
        yPosition += 5;
        doc.text(`CGPA: ${cumulative.cgpa}`, cumulativeX, yPosition);
      }

      // Generate table data
      const data = generateData();
      const header = [
        "Course Code",
        "Course Name",
        "Credit",
        "Type",
        "Teacher",
        "Grade",
        "Grade Point",
      ];

      // Use autoTable for generating tables
      doc.autoTable({
        head: [header],
        body: data,
        startY: 100,
        theme: "grid", // You can also use 'plain' or 'striped'
        margin: { top: 10, left: 10, right: 10 },
      });

      // Automatically download the PDF file
      doc.save(`${info.id}Sem-${semester}.pdf`);
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <button
        className="mx-auto btn w-fit justify-center"
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResultPDF;
