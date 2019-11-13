import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shares: 0
        }

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
        let transaction = {
            user_id: currentUser, 
            symbol: symbol, 
            shares: this.state.shares,
            cost: this.calculateCost()
        }
        this.props.createTransaction(transaction);
    }

    calculateCost() {
        let total = this.state.shares * this.props.price;
        return parseFloat(Math.round(total * 100) / 100).toFixed(2);
    }

    render() {
        const { price } = this.props;
        return (
            <div className='transaction-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <div>
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
                    <div>
                        <label> Estimated Cost</label>
                        <div>$ {this.calculateCost()}</div>
                    </div>
                    <button type="submit">Review Order</button>
                </form>
            </div>
        )
    }
}

export default TransactionForm;