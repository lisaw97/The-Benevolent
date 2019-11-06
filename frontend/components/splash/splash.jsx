import React from 'react';
const images = ['./phone.png'];
class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneImg: images[0]
        }
    }
    render() {
        return (
            <div className='splash-div'>
                <div className='splash-section-1'>
                    <div className='splash-body-1'>
                        <h1 className='splash-h1-1'>It's Time to Do Money</h1>
                        <p className='splash-description-1'>Robinhood, a pioneer of commission-free investing, gives you access to investing and more ways to make your money work harder.</p>
                    </div>
                    <div>
                        <img className='splash-image-1' src={this.state.phoneImg}/>
                    </div>
                </div>
                <div className='splash-section-2'>
                    <h1 className='splash-h1-2'>Break Free from Commission Fees</h1>
                    <p className='splash-description-2'>Make unlimited commission-free trades in stocks, funds, and options with Robinhood Financial. The same goes for buying and selling cryptocurrencies with Robinhood Crypto. Zero commission fees.</p>
                </div>
                <div className='splash-section-3'>
                    <h1 className='splash-h1-3'>Introducing Cash Management</h1>
                    <p className='splash-description-3'>Invest, spend, and earn 1.80% APY*—all through your brokerage account.</p>
                    {/* <img className="splash-image-3" src="https://cdn.robinhood.com/assets/robinhood/brand/ee3e0eec2d0e96b8848282f716b94d3c-1x.png"></img> */}
                    <video width='320' height='240' autoplay>
                        <source src="app/assets/images/credit-card-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}

export default Splash;