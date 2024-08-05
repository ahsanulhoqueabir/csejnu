import React from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const UserRow = ({ student, index }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleChange = async () => {
    const inputOptions = new Promise((resolve) => {
      resolve({
        name: "Name",
        email: "Email",
        role: "Role",
      });
    });
    const { value: fieldtype } = await Swal.fire({
      title: "Which field u want to change?",
      input: "radio",
      inputOptions,
      confirmButtonColor: "#4AC5D6",
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });
    if (fieldtype === "email") {
      const { value: email } = await Swal.fire({
        title: "Enter new email",
        input: "email",
        confirmButtonColor: "#4AC5D6",
        inputPlaceholder: "Enter new email",
      });
      if (email) {
        axiosSecure
          .put(`/admin/manageuser?id=${student._id}&email=${user?.email}`, {
            "personal.email": email,
          })
          .then((res) => {
            toast.success(`${fieldtype} changed successfully...`);
          });
      }
    }
    if (fieldtype === "name") {
      const { value: value } = await Swal.fire({
        title: `Enter new ${fieldtype}`,
        input: "text",
        confirmButtonColor: "#4AC5D6",
        inputPlaceholder: `Enter new ${fieldtype}`,
        inputValidator: (value) => {
          if (!value) {
            return "You need to write desired Name!";
          }
        },
      });

      if (value) {
        axiosSecure
          .put(`/admin/manageuser?id=${student._id}&email=${user?.email}`, {
            "personal.name.fullName": value,
          })
          .then((res) => {
            toast.success(`${fieldtype} changed successfully...`);
          });
      }
    }
    if (fieldtype === "role") {
      const { value: role } = await Swal.fire({
        title: "Select a Role",
        input: "select",
        confirmButtonColor: "#4AC5D6",
        inputOptions: {
          admin: "Admin",
          student: "Student",
          teacher: "Teacher",
        },
        inputPlaceholder: "Select a Role",
      });
      if (role) {
        axiosSecure
          .put(`/admin/manageuser?id=${student._id}&email=${user?.email}`, {
            role: role,
          })
          .then((res) => {
            toast.success(`${fieldtype} changed successfully...`);
          });
      }
    }
  };
  return (
    <tr
      key={student.email}
      className={`divide-x-2  divide-info-content border-b border-info-content `}
    >
      <td>{index + 1}</td>
      <td className="capitalize">{student.personal.name.fullName}</td>
      <td>{student.personal.email}</td>
      <td className="capitalize">{student.role}</td>
      <td className="w-fit text-center">
        <button onClick={handleChange}>
          <FaEdit />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
