import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PlusIcon } from "@heroicons/react/solid";

import { Course } from "../../global/interfaces/Course";
import PostCreateModal from "../modals/PostCreateModal";
import PostList from "../Post/PostList";

interface Props {}

// Todo: Add handler for button

const CourseDetail: React.FC<Props> = ({ children}) => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isInstructor, setIsInstructor] = useState<boolean>(() => {
    // check if instructor id = current user id
    return true;
  });

  const [isEnrolled, setIsEnrolled] = useState<boolean>(() => {
    //   fetch(baseApiUr/courses)
    //  Check if this course is in the courses of the student;
    // If yes, then true
    // else false
    return false;
  });

  const [course, setCourse] = useState<Course>(() => {
    return {
      cid: id,
      code: "CS F214",
      name: "Logic in Computer Science",
      sem: "1",
      year: "2020",
      instructorId: 1,
      instructorName: "DR. V Ramaswamy",
    };
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickCreatePost = (e: React.SyntheticEvent) => {
    console.log("Creating a post!");

    setModalIsOpen(true);
  };

  const onClickEnroll = (e: React.SyntheticEvent) => {};

  useEffect(() => {
    // Data Required
    // interface meh {
    //     courseName: string;
    //     courseCode: string;
    //     courseInstructorId: string; // -> courseInstrucorName: string
    //     courseYear: string;
    //     courseSem: string;
    //     userIsEntrolled: boolean; // derived from locally Stored users course
    //     userIsInstructor: boolean; // derived from courseInstructorId & userId
    // }

    setIsLoading(false);
  }, []);

  return isLoading ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div className="">
      <div className="flex justify-between mb-2">
        <div className="truncate flex flex-row">
          <h3 className="text-primary-300 my-auto mr-2">{course.code}</h3>
          <h3 className="text-primary-100 my-auto">{course.name}</h3>
        </div>

        {isInstructor && (
          <div className="my-auto">
            <button
              className="px-4 my-auto rounded-lg text-button bg-accent focus:outline-none"
              onClick={onClickCreatePost}
            >
              <PlusIcon className="w-8 h-8 text-primary-100" />
            </button>
            <PostCreateModal
              courseId={id}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            />
          </div>
        )}

        {!isEnrolled && !isInstructor && (
          <button
            className="py-2 px-6 my-auto rounded-lg text-button bg-accent focus:outline-none"
            onClick={onClickEnroll}
          >
            Enroll
          </button>
        )}

        {/* {(!isEnrolled || isInstructor) && (
          {isInstructor ? () : ()}
          // <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
          //   <SvgPlus />
          // </button>
        )} */}
      </div>
      <div className="flex mb-5">
        <h4 className="text-primary-300 mr-3">
          Sem {course.sem} | {course.year}
        </h4>
        <h4 className="text-accent mr-4">{course.instructorName}</h4>
      </div>
      <PostList courseId={course.cid} />
    </div>
  );
};

export default CourseDetail;
