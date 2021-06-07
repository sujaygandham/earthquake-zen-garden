import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import response from "../../data.json";
import { TIME_FORMAT } from "../App";

const { data } = response;

export const Home = () => {
  const [sortBy, setSortBy] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("");

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder((sortOrder) => (sortOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortArrow = (column) => {
    if (sortOrder != "" && sortBy === column) {
      return sortOrder === "asc" ? (
        <span aria-label="up-arrow">&#8593;</span>
      ) : (
        <span aria-label="down-arrow">&#8595;</span>
      );
    }
  };

  const comparator = (column, order) => {
    const multiplier = order === "desc" ? -1 : 1;
    switch (column) {
      case "title":
        return (a, b) =>
          multiplier *
          (parseInt(a.properties.place) - parseInt(b.properties.place));
      case "mag":
        return (a, b) => multiplier * (a.properties.mag - b.properties.mag);
      case "time":
        return (a, b) => multiplier * (a.properties.time - b.properties.time);
      default:
        return;
    }
  };

  return (
    <div className="home">
      <h3>{data.metadata.title}</h3>
      <div className="home-content">
        <table>
          <thead className="home-header">
            <tr>
              <td>
                <div onClick={() => handleSort("title")}>
                  Title {sortArrow("title")}
                </div>
              </td>
              <td>
                <div onClick={() => handleSort("mag")}>
                  Magnitude {sortArrow("mag")}
                </div>
              </td>
              <td>
                <div onClick={() => handleSort("time")}>
                  Time {sortArrow("time")}
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data.features
              .sort(comparator(sortBy, sortOrder))
              .map((feature, index) => (
                <tr key={index}>
                  <td data-testid="place">
                    <Link to={`/details/${feature.id}`}>
                      {feature.properties.place}
                    </Link>
                  </td>
                  <td className="magnitude" data-testid="magnitude">{feature.properties.mag}</td>
                  <td data-testid="time">{moment(feature.properties.time).format(TIME_FORMAT)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
