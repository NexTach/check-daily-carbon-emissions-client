import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  position: fixed;
  inset: 0;

  .content-area {
    flex: 1;
    padding: 12px;
    overflow-y: auto;
    background: #f5f5f5;
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .card-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 14px;
      color: #333;
      padding: 8px 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .left-content,
      .right-content {
        display: flex;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 45px;
    background: white;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 9999;
    margin: 0;
  }
`;
