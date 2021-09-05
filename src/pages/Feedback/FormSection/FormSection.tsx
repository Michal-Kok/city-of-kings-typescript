import React from 'react';
import { 
    FormSectionWrapper,
    Title,
    FormWrapper,
    StyledForm,
    StyledInput,
    StyledTextArea,
    SubmitButton,
} from './FormSection.style';

const FormSection: React.FC = () => {
    return (
        <FormSectionWrapper>
            <Title>
                Show others your joy.
            </Title>
            <FormWrapper>
                <StyledForm>
                    <StyledInput
                        placeholder="Username"
                        name="username" />
                    <StyledTextArea />
                    <SubmitButton>
                        Submit
                    </SubmitButton>
                </StyledForm>
            </FormWrapper>
        </FormSectionWrapper>
    )
}

export default FormSection;
