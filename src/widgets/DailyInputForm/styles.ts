import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  padding-bottom: 60px;
`;

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ProfileImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`;

export const ProfileText = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const MenuButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
`;

export const Card = styled.div`
  padding: 16px;
  margin: 0;
  border: 1px solid #eee;
  border-radius: 8px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const CardWrapper = styled.div`
  display: flex;
  align-self: center;
  padding: 8px;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem, 0;
  font-weight: 500;
`;

export const EmissionValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #3850c9;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
`;

export const WaterButtons = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const WaterButton = styled.button<{ active: boolean }>`
  width: 2rem;
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background: ${(props) => (props.active ? "#3b82f6" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
`;

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #eee;
  padding: 1rem;
`;

export const NavButtons = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  margin-bottom: 60px;
  overflow-y: auto;
  height: calc(100vh - 60px);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  width: 100%;
`;

export const InputLabel = styled.label`
  min-width: 80px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const TimeInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;
  margin-left: 4px;
`;

export const TimeInput = styled.input`
  width: 40px;
  height: 32px;
  padding: 0 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const UnitLabel = styled.span`
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  margin: 0 2px;
  width: 600px;
`;

export const SubmitButton = styled.button`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px);
  max-width: 468px;
  height: 48px;
  background: #3850c9;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  z-index: 1000;
  cursor: pointer;
`;
