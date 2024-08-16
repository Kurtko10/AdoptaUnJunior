import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import "./Body.css";

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
