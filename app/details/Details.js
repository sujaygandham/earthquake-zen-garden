import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import response from "../../data.json";
import { TIME_FORMAT } from "../App";

export const Details = () => {
  const { id } = useParams();
  const feature = response.data.features.find(
    (feature) => feature.id === id
  ).properties;

  return (
    <div className="details">
      <h3>{feature.title}</h3>
      <table>
        <tbody>
          <tr>
            <td className="label">Title</td>
            <td className="value">{feature.title}</td>
          </tr>
          <tr>
            <td className="label">Magnitude</td>
            <td className="value">{feature.mag}</td>
          </tr>
          <tr>
            <td className="label">Time</td>
            <td className="value">
              {moment(feature.time).format(TIME_FORMAT)}
            </td>
          </tr>
          <tr>
            <td className="label">Status</td>
            <td className="value">{feature.status}</td>
          </tr>
          <tr>
            <td className="label">Tsunami</td>
            <td className="value">{feature.tsunami}</td>
          </tr>
          <tr>
            <td className="label">Type</td>
            <td className="value">{feature.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
