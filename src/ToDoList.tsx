import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const logData = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(logData)}>
        <input
          {...register("sampleInput1", {
            required: "이 필드를 반드시 입력하세요",
          })}
          placeholder="Write a to do"
        />
        <input
          {...register("sampleInput2", { required: true })}
          placeholder="Write a to do"
        />
        <input
          {...register("sampleInput3", { required: true, minLength: 5 })}
          placeholder="Write a to do"
        />
        <input
          {...register("sampleInput4", {
            required: "이 필드를 반드시 입력하세요",
            minLength: { value: 5, message: "5자 이상 입력하세요" },
          })}
          placeholder="Write a to do"
        />
        <input
          {...register("sampleInput5", { required: true })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
