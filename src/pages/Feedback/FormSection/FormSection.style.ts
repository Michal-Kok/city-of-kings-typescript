import styled from "styled-components";

export const FormSectionWrapper = styled.div`
    width: 100%;
    padding: 100px 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;
    background-color: ${({ theme }) => theme.colors.grey};
`;

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xll};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
`;

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 5% 12%;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`;

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const StyledInput = styled.input`
    height: 35px;
    width: 200px;
    border: 1px solid #C0C7D6;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 25px;
    align-self: flex-start
`;

export const StyledTextArea = styled.textarea`
    height: 350px;
    width: 100%;
    border: 1px solid #C0C7D6;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 25px;
`;

export const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.colors.pink};
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    letter-spacing: 1.5px;
    border-radius: 40px;
    margin-top: 40px;
    cursor: pointer;
    transition: .3s;
    align-self: flex-end;

    &:hover {
        background-color: #2F0C49;
    }
`;