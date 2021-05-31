function Modal(props) {
  const { open, close, money, address } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>출금신청</header>
          <main>
            <p>USD 최종 출금 신청 금액: {money}</p>
            <p> 출금 주소: {address}</p>
            위와 같은 정보로 출금을 신청하시겠습니까?
          </main>
          <footer>
            <button
              style={{
                background: "#ffc107",
                outline: "0",
                border: "0",
                color: "black",
                width: "45%",
                height: "1.8rem",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
            >
              출금 신청
            </button>

            <button
              onClick={() => close()}
              style={{
                background: "#ffc107",
                outline: "0",
                border: "0",
                color: "black",
                width: "45%",
                height: "1.8rem",
                fontSize: "0.7rem",
                fontWeight: "bold",
              }}
            >
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
export default Modal;
