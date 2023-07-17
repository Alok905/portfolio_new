import React, { useRef, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";

const About = ()  => {

  const codeEditorWrapRef = useRef()
  const aboutArray = [
    [{ str: "class", type: "keyword" }, { str: " AlokRanjan", type: "function" }, { str: " {", type: "op" }],
    [{str: ". . ", type: "dot"},{ str: "// I can and I will", type: "comment" }],
    [{str: ". . ", type: "dot"},{ str: "constructor", type: "keyword" }, { str: "() {", type: "op" }],
    [{str: ". . . . ", type: "dot"},{ str: "this", type: "keyword2" }, { str: ".", type: "op" }, { str: "name", type: "variable" }, { str: " = ", type: "op" }, { str: `'Alok Ranjan Joshi'`, type: "string" }],
    [{str: ". . . . ", type: "dot"},{ str: "this", type: "keyword2" }, { str: ".", type: "op" }, { str: "dateOfBirth", type: "variable" }, { str: " = ", type: "op" }, { str: `'28-march-2002'`, type: "string" }],
    [{str: ". . . . ", type: "dot"}, { str: "this", type: "keyword2" }, { str: ".", type: "op" }, { str: "email", type: "variable" }, { str: " = ", type: "op" }, { str: `'alokranjanjoshi07567@gmail.com'`, type: "string" }],
    [{ str: ". . ", type: "dot" }, { str: "}", type: "op" }],
    //education
    [{str: ". . ", type: "dot"}, { str: "education", type: "function" }, { str: "() {", type: "op" }],
    [{str: ". . . . ", type: "dot"}, { str: "return ", type: "keyword3" }, { str: "[", type: "op" }],
    [{str: ". . . . . . ", type: "dot"}, { str: "{ ", type: "op" }, {str: `'2015-2017'`, type: "string"}, {str: " : ", type: "op"},  {str: `'CMHS, Bangomunda'`, type: "string"},  {str: ` }`, type: "op"}, { str: ",", type: "op" }],
    [{str: ". . . . . . ", type: "dot"}, { str: "{ ", type: "op" }, {str: `'2017-2019'`, type: "string"}, {str: " : ", type: "op"},  {str: `'Adyant Higher Secondary School, BBSR'`, type: "string"},  {str: ` }`, type: "op"}, { str: ",", type: "op" }],
    [{str: ". . . . . . ", type: "dot"}, { str: "{ ", type: "op" }, {str: `'2019-2020'`, type: "string"}, {str: " : ", type: "op"},  {str: `'FIITJEE'`, type: "string"},  {str: ` }`, type: "op"}, { str: ",", type: "op" }],
    [{ str: ". . . . . . ", type: "dot" }, { str: "{ ", type: "op" }, { str: `'2020-now'`, type: "string" }, { str: " : ", type: "op" }, { str: `'OUTR, BBSR'`, type: "string" }, { str: ` }`, type: "op" }, { str: ",", type: "op" }],
    [{ str: ". . . . ", type: "dot" }, { str: "]", type: "op" }],
    [{ str: ". . ", type: "dot" }, { str: "}", type: "op" }],
    //skills
    [{ str: ". . ", type: "dot" }, { str: "skills", type: "function" }, { str: "() {", type: "op" }],
    [{ str: ". . . . ", type: "dot" }, { str: "return ", type: "keyword3" }, { str: "[ ", type: "op" }, { str: `'C', 'C++', 'Data Structures', 'HTML', 'CSS', 'Javascript', 'ReactJS', 'NodeJS', 'ExprerssJS', 'MongoDB', 'Blockchain', 'Solidity',`, type: "string" }, { str: " | ", type: "blink" }, { str: " ]", type: "op" }],
    [{str: ". . . . ", type: "dot"},{ str: "// Still learning new skills", type: "comment" }],
    [{ str: ". . ", type: "dot" }, { str: "}", type: "op" }],
    [{ str: "}", type: "op" }],
  ]

  const colors = new Map([
  ["keyword", "#5918df"],
  ["keyword2", "#e3244c"],
  ["keyword3", "#5918df"],
  ["string", "#24e33a"],
  ["function", "#eeff31"],
  ["variable", "#24e394"],
  ["comment", "#78707e"],
  ["op", "#fff"],
  ["dot", "#3b355399"],
]);

  const blinkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1, 0],
      transition: {
      repeat: Infinity,
        type: "ease",
        duration: .8
      }
    }
  }
  return (
    <div className="page about-page">
      <div className="code-editor-wrap"
      >
        <div className="code-editor">
          {
            aboutArray.map((line, i) => (
              <div className={`line line-${i + 1}`} key={i}>
                <span className="line-no">
                  {~~((i + 1) / 10) == 0 ? `0${i + 1}` : i + 1}
                </span>
                <span className="line-code">
                  {
                    line.map(({ str, type }) => (
                      type != "blink" ? <span className={type} style={{ color: colors.get(type), fontWeight: type === "dot" ? 400 : 700}}>{str}</span> : <motion.span variants={blinkVariants} animate="visible">{str}</motion.span>
                    ))
                  }
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
