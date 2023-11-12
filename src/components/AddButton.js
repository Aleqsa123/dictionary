import styled from 'styled-components';

const Button = styled.button`
    width: 250px;
    height: 45px;
    background: blueviolet;
    margin: 25px auto 25px auto;
    border-radius: 10px;
    font-size: 1.5rem;
    padding-left: 20px;
    border: transparent;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const AddButton = (props) => {
    return (
        <Div>
            <Button type="submit" onClick={props.addWord}> Add New Word </Button>
        </Div>
    )
}

export default AddButton