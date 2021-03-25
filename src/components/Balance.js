import { divide } from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadBalances } from '../store/interactions'
import {
    web3Selector,
    exchangeSelector,
    tokenSelector,
    accountSelector
} from '../store/selectors'

class Balance extends Component {
    componentWillMount() {
        this.loadBlockchainData()
    }
    
    async loadBlockchainData(props) {
        const { dispatch, web3, exchange, token, account } = props
        await loadBalances(dispatch, web3, exchange, token, account)
    }

    render() {
        return (
            <div className="card bg-dark text-white">
                <div className="card-header">
                    Balance
                </div>
                <div className="card-body">

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        account: accountSelector(state),
        exchange: exchangeSelector(state),
        token: tokenSelector(state),
        web3: web3Selector(state)
    }
}

export default connect(mapStateToProps)(Balance)