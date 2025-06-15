import { useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

const useQuestionBank = () => {
  const axiosSecure = useAxiosSecure();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  return <div></div>;
};

export default useQuestionBank;
