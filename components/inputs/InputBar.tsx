import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { TodoInterface } from "../../interfaces/CardInterface";
import Image from "next/image";
import PlusIcon from "../icons/PlusIcon";
const validationSchema = Yup.object().shape({
  todo: Yup.string(),
});

interface InputBarProps {
  setTodos: any;
  todos: TodoInterface[];
}
let data = [];
const InputBar = (props: InputBarProps) => {
  const initialValues = { todo: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        data = props.todos;
        data.push({ name: values.todo, status: false });
        props.setTodos([...data]);
        actions.resetForm();
      }}
    >
      {(props: FormikProps<any>) => (
        <Form className="flex flex-row space-x-4 w-full">
          <Field name="todo">
            {({ field, form }: any) => (
              <input
                type="text"
                {...field}
                placeholder="Type Todos"
                className="bg-transparent border-white border rounded-[10px] text-white px-6 py-2 w-full"
              />
            )}
          </Field>
          <button
            type="submit"
            className="text-white rounded-lg bg-blue-400 w-[4rem] h-[3rem] text-[2rem] font-bold  p-0 hover:bg-blue-950 transition-all duration-300 flex  items-center justify-center"
          >
            {/* <Image
              width={24}
              height={24}
              src={"/plus-large-svgrepo-com.svg"}
              alt="Plus Icon"
            /> */}
            <PlusIcon color="#FFFFFF" height={"24px"} width={"24px"} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default InputBar;
