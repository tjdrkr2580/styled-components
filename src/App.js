import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(!dialog);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(!dialog);
  };
  const onConfirm = () => {
    console.log("삭제");
    setDialog(!dialog);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <>
        <AppBlock>
          <Button size="small" outline>
            Button
          </Button>
          <Button color="gray" outline size="large">
            Button
          </Button>
          <Button color="pink" size="medium">
            Button
          </Button>
          <ButtonGroup>
            <Button color="gray" fullSize>
              Button
            </Button>
            <Button color="pink" fullSize>
              Button
            </Button>
            <Button fullSize>Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" fullSize>
              Button
            </Button>
            <Button color="pink" fullSize>
              Button
            </Button>
            <Button fullSize onClick={onClick}>
              삭제하기
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onCancel={onCancel}
          onConfirm={onConfirm}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
