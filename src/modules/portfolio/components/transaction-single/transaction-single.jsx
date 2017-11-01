import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TransactionHeader from 'modules/portfolio/components/transaction-header/transaction-header'
import TransactionMeta from 'modules/portfolio/components/transaction-meta/transaction-meta'
import LinkedTransaction from 'modules/portfolio/components/transaction-linked/transaction-linked'
import { ChevronDown } from 'modules/common/components/icons/icons'

import toggleHeight from 'utils/toggle-height/toggle-height'

import CommonStyles from 'modules/portfolio/components/transactions/transactions.styles'
import ToggleHeightStyles from 'utils/toggle-height/toggle-height.styles'

export default class TransactionSingle extends Component {

  static propTypes = {
    transaction: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const s = this.state
    const { transaction } = this.props

    return (
      <div className={CommonStyles.Transaction__item}>
        <button
          className={CommonStyles.Transaction__body}
          onClick={() => { toggleHeight(this.singleTransactionMeta, s.isOpen, () => { this.setState({ isOpen: !s.isOpen }) }) }}
        >
          <TransactionHeader transaction={transaction} />
          <span className={classNames({ [`${CommonStyles['is-open']}`]: s.isOpen })}>{ ChevronDown }</span>
        </button>
        <div className={ToggleHeightStyles['toggle-height-target']} ref={singleTransactionMeta => this.singleTransactionMeta = singleTransactionMeta}>
          <TransactionMeta meta={transaction.transactions[0].meta} />
        </div>
      </div>
    )
  }
}
