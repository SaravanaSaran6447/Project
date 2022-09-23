import React from "react";
import { Field, Form } from "react-final-form";

function Doc({ label,placeholder }) {
  React.useEffect(() => {
    const realFileBtn = document.getElementById(`real-file-${label}`);
    const customBtn = document.getElementById(`custom-button-${label}`);
    const customTxt = document.getElementById(`custom-text-${label}`);

    customBtn.addEventListener("click", function (e) {
      realFileBtn.click();
    });

    realFileBtn.addEventListener("change", function (e) {
      console.log(e.target.files[0]);
      if (realFileBtn.value) {
        customTxt.innerHTML = e.target.files[0].name;
        console.log(realFileBtn.value);
      } else {
        customTxt.innerHTML = "No file chosen, yet.";
      }
    });
  }, []);
  const onSubmitFunc = (values) => {
    console.log(values);
  };

  console.log(`upload ${label}`);
  return (
    <Form
  
      onSubmit={onSubmitFunc}
      render={({ handleSubmit }) => {
        return (
          <form className="w-full" onSubmit={handleSubmit} id="docUploadForm">
            <Field name={label}>
              {({ input }) => {
                console.log(input.value);
                return (
                  <div className="flex justify-center w-full">
                    <div className="flex w-full">
                      <div className="w-full flex text-xs lg:text-sm xl:text-xl bg-white rounded-xl">
                        <input
                          type="file"
                          id={`real-file-${label}`}
                          hidden="hidden"
                        />
                        <button
                          className="flex space-y-1 items-center outline-none border-0 rounded-xl justify-start w-full"
                          type="button"
                          id={`custom-button-${label}`}
                        >
                          <div className="bg-green w-max flex text-white px-3 py-2 boder-2 rounded-md">
                            <div className="text-xs w-max">
                              Browse
                            </div>
                          </div>
                          <div className="w-full text-xs">
                            <span
                              id={`custom-text-${label}`}
                              className="text-slate-700"
                            >
                              {placeholder}
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Field>
          </form>
        );
      }}
    ></Form>
  );
}
export default Doc;
