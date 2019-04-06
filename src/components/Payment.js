import React from 'react';

const Payment = props => {
    const styles = {
        h1: {
            textAlign: 'center',
            margin: '20px 0 10px',
        },

        p: {
            textAlign: 'center',
            fontSize: 20,
        },

        sign: {
            fontSize: 23,
            marginRight: 5,
            verticalAlign: -1,
        }
    }

    return (
        <React.Fragment>
            <h1 style={styles.h1}>Opłać swoje zamówienie</h1>

            {/* in progress */}
            <p style={styles.p}><i className="fas fa-exclamation-triangle" style={styles.sign}></i> Aplikacja w trakcie budowy, wróć później...</p>

            <a href="#" class="back-to-order" onClick={props.menuView}>Wróć do zamówienia</a>
        </React.Fragment>
    )
}

export default Payment;