import React from "react";
import { Link } from "react-router-dom";
import "./On.css";

export default function On() {
  return (
    <div>
      <Link className="On" to="/Todo">
        <button class="btn-hover color-8">Click</button>
      </Link>
    </div>
  );
}
