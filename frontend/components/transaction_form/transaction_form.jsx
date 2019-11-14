import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shares: 0,
            buy: true,
            submit: false,
            time: ""
        }

        this.setBuy = this.setBuy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { symbol, currentUser } = this.props;
        let shares = this.state.shares;
        if (!this.state.buy) {
           shares = shares * -1;
        } 
        let transaction = {
            user_id: currentUser,
            symbol: symbol, 
            shares: shares,
            cost: this.calculateCost()
        }
        this.props.createTransaction(transaction);
        this.setState({ submit: true, shares: 0 });
    }

    calculateCost() {
        let total = this.state.shares * this.props.price;
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }

    setBuy(boolean) {
        this.setState({ buy: boolean });
    }

    renderForm() {
        if (this.state.buy) {
            return (
                <div>
                    <button type="submit">Review Order</button>
                    <div className='buying-power'>$10022.33 Buying Power Available</div>
                </div>
            )
        } else {
            return (
                <div>
                    <button type="submit">Sell Stocks</button>
                    <div className='buying-power'>{this.calculateShares(this.props.symbol)} Shares Available</div>
                </div>
            )
        }
    }

    calculateShares(symbol) {
        const { transactions } = this.props;
        let shares = 0;
        let trans = Object.values(transactions);
        trans.forEach(transaction => {
            if (transaction.symbol === symbol) {
                shares = shares + transaction.shares;
            }
        });
        return shares;
    }
    
    render() {
        const { price } = this.props;
        let buyName = 'highlight';
        let sellName = 'none';
        if (!this.state.buy) {
            buyName = 'none';
            sellName = 'highlight';
        }

        return (
            <div className='transaction-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <div className='transaction-type'>
                        <h2 id={buyName} onClick={() => this.setBuy(true)}>Buy</h2>
                        <h2 id={sellName} onClick={() => this.setBuy(false)}>Sell</h2>
                    </div>
                    <div className='transaction-content'>
                        <label>Shares</label>
                        <input 
                            type="text"
                            onChange={this.update('shares')}
                            value={this.state.shares}
                        />
                    </div>
                    <div className='mkt-price'>
                        <label>Market Price</label>
                        <div>{price}</div>
                    </div>
                    <div className='transaction-content'>
                        <label> Estimated Cost</label>
                        <div>$ {this.calculateCost()}</div>
                    </div>
                    {this.renderForm()}
                </form>
            </div>
        )
    }
}

export default TransactionForm;