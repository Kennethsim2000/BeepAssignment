import React from "react";
import axios from "axios";
import { userID, userIsTutor } from "~/pages/displayPage";

export interface User {
  id: number;
  name: string;
  age: number;
  subjects: string[];
  pricing?: number;
}

interface DisplayedUserCardProps {
  displayedUser: User;
  isMatchCard: boolean;
}

const DisplayedUserCard: React.FC<DisplayedUserCardProps> = ({
  displayedUser,
  isMatchCard,
}) => {
  const handleAccept = () => {
    if (userIsTutor) {
      console.log("Student accepted");
      axios
        .put(`http://localhost:8080/tutor/like/${userID}/${displayedUser.id}`)
        .catch((error) => {
          console.error("Error liking student", error);
        });
    } else {
      console.log("Tutor accepted");
      axios
        .put(`http://localhost:8080/student/like/${userID}/${displayedUser.id}`)
        .catch((error) => {
          console.error("Error liking tutor", error);
        });
    }
  };

  const handleReject = () => {
    console.log("Student rejected");
  };

  function handleChat(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  const handleUnmatch = () => {
    if (userIsTutor) {
      console.log("Unmatching student");
      axios
        .delete(
          `http://localhost:8080/tutor/unmatch/${userID}/${displayedUser.id}`
        )
        .catch((error) => {
          console.error("Error unmatching student", error);
        });
    } else {
      console.log("Unmatching tutor");
      axios
        .delete(
          `http://localhost:8080/student/unmatch/${userID}/${displayedUser.id}`
        )
        .catch((error) => {
          console.error("Error unmatching tutor", error);
        });
    }
  };

  return (
    <div className="flex flex-col p-4 w-72 bg-indigo-100 rounded-lg shadow-lg h-48">
      <h2 className="my-1">{displayedUser.name}</h2>
      <p className="font-light">{displayedUser.age} y.o.</p>
      <p className="font-light">{displayedUser.subjects.join(", ")}</p>
      {!userIsTutor && (
        <p className="font-light">Pricing: ${displayedUser.pricing}</p>
      )}
      <div className="mt-auto">
        {isMatchCard ? (
          <div className="flex justify-between">
            <button
              className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300"
              onClick={handleChat}
            >
              Chat
            </button>
            <button
              className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-gray-200 hover:bg-gray-300"
              onClick={handleUnmatch}
            >
              Unmatch
            </button>
          </div>
        ) : (
          <div className="flex justify-between">
            <button
              className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300"
              onClick={handleAccept}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 flex items-center justify-center w-20 h-10 rounded-md shadow-md text-gray-700 bg-violet-200 hover:bg-violet-300"
              onClick={handleReject}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayedUserCard;
