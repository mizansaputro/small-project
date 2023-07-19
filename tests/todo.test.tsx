import "@testing-library/jest-dom";
import { findByTestId, findByText, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Todo from "@containers/Todo";
import { getTodosData } from "@containers/Todo/config";
import userEvent from '@testing-library/user-event'
import TodoCreateTask from "@containers/Todo/component/TodoCreateTask";


describe("Unit Testing: Todo Page", () => {
  let todoItems;
  beforeEach(async () => {
    render(<Todo />);
    todoItems = await getTodosData().then(res => {return res});
  })

  it("renders todo page: tab view",  async () => {
    // check if all components are rendered
    expect(screen.getByTestId("page_container")).toBeInTheDocument();
    expect(screen.getByTestId("tab_view")).toBeInTheDocument();
    expect(screen.getByTestId("tab_addTask")).toBeInTheDocument();
    expect(screen.getByTestId("box_column")).toBeInTheDocument();
    expect(screen.getByTestId("column_header")).toBeInTheDocument();
    expect(screen.getByTestId("header_status")).toBeInTheDocument();
    expect(screen.getByTestId("header_task")).toBeInTheDocument();
    expect(screen.getByTestId("header_due")).toBeInTheDocument();
    expect(screen.getByTestId("header_actions")).toBeInTheDocument();
  
    await waitFor(()=>{
      todoItems?.map(item => {
        const getRowStatus = screen.getByTestId(`row-${item.status}-${item.id}`);
        const getRowTask = screen.getByTestId(`row-${item.task}-${item.id}`);
        const getRowDue = screen.getByTestId(`row-${item.due}-${item.id}`);
        expect(getRowStatus).toBeInTheDocument();
        expect(getRowTask).toBeInTheDocument();
        expect(getRowDue).toBeInTheDocument();
      });
    }); 

    fireEvent.click(screen.getByTestId("tab_addTask"));
      const addTaskBox = screen.getByTestId("addTaskBox");
      const title_addTask = screen.getByTestId("title_addTask")
      const select_status = screen.getByTestId("select_status");
      expect(addTaskBox).toBeInTheDocument();
      expect(title_addTask).toBeInTheDocument();
      expect(select_status).toBeInTheDocument();
      expect(screen.getByTestId("input_task")).toBeInTheDocument();
      expect(screen.getByTestId("select_datepicker")).toBeInTheDocument();
      expect(screen.getByTestId("btn_submit")).toBeInTheDocument();
    
  });

  it("tab add task: click select status",  async () => {
    fireEvent.click(screen.getByTestId("tab_addTask"));
    fireEvent.click(screen.getByTestId("select_status"));

    await waitFor(() => {
      const options_1 = screen.getByTestId("option_status_notStarted");
    })
    /*const options_2 = screen.getByTestId("option_status_inProgress");
    const options_3 = screen.getByTestId("option_status_done");*/

    //expect(screen.getAllByTestId("option_status")).toBeInTheDocument();
    
    
    
    
  });
});


