# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'portfolio_snapshots'
require 'csv';

ActiveRecord::Base.transaction do
    User.delete_all
    Stock.delete_all
    Transaction.delete_all
    WatchlistItem.delete_all
    PortfolioSnapshot.delete_all

    nasdaq_csv = File.read(Rails.root.join('db', 'nasdaq.csv'))    
    nasdaq = CSV.parse(nasdaq_csv, :headers => true, :encoding => 'ISO-8859-1')
    nasdaq.each do |row|
        stock = Stock.create!(symbol: row["Symbol"], company_name: row["Company Name"])
    end

    nyse_csv = File.read(Rails.root.join('db', 'nyse.csv'))
    nyse = CSV.parse(nyse_csv, :headers => true, :encoding => 'ISO-8859-1')
    nyse.each do |row|
        stock = Stock.create!(symbol: row["Symbol"], company_name: row["Company Name"])
    end

    guest = User.create!(
        username: 'guest',
        email: 'guest@gmail.com',
        first_name: 'Guest',
        last_name: '1',
        password: 'password'
    )

    lisa = User.create!(
        username: 'lisa',
        email: 'lisa@gmail.com',
        first_name: 'Lisa',
        last_name: 'Wen',
        password: 'password'
    )

    # tsla = Stock.create!(
    #     company_name: 'Tesla, Inc.',
    #     symbol: 'TSLA'
    # )

    # aapl = Stock.create!(
    #     company_name: 'Apple, Inc.',
    #     symbol: 'AAPL'
    # )

    # msft = Stock.create!(
    #     company_name: 'Microsoft Corp.',
    #     symbol: 'MSFT'
    # )

    # fb = Stock.create!(
    #     company_name: 'Facebook, Inc.',
    #     symbol: 'FB'
    # )

    # twtr = Stock.create!(
    #     company_name: 'Twitter, Inc.',
    #     symbol: 'TWTR'
    # )

    # v = Stock.create!(
    #     company_name: 'Visa, Inc.',
    #     symbol: 'V'
    # )

    # c = Stock.create!(
    #     company_name: 'Citigroup, Inc.',
    #     symbol: 'C'
    # )

    # baba = Stock.create!(
    #     company_name: 'Alibaba Group Holding Ltd.',
    #     symbol: 'BABA'
    # )

    Transaction.create(
        user_id: guest.id,
        shares: 2,
        cost: 234.54,
        symbol: 'TSLA'
    )

    Transaction.create(
        user_id: guest.id,
        symbol: 'AAPL',
        shares: 2,
        cost: 234.54
    )

    Transaction.create(
        user_id: guest.id,
        shares: 4,
        cost: 234.54,
        symbol: 'TSLA'
    )

    Transaction.create(
        user_id: guest.id,
        shares: 7,
        cost: 186.62,
        symbol: 'BABA'
    )

    Transaction.create(
        user_id: lisa.id,
        symbol: 'AAPL',
        shares: 5,
        cost: 234.54
    )

    Transaction.create(
        user_id: lisa.id,
        symbol: 'AAPL',
        shares: 3,
        cost: 234.54
    )

    Transaction.create(
        user_id: lisa.id,
        symbol: 'V',
        shares: 4,
        cost: 179.74
    )

    WatchlistItem.create(
        user_id: guest.id,
        symbol: 'MSFT'
    )

    WatchlistItem.create(
        user_id: guest.id,
        symbol: 'C'
    )

    WatchlistItem.create(
        user_id: guest.id,
        symbol: 'FB'
    )

    WatchlistItem.create(
        user_id: guest.id,
        symbol: 'TWTR'
    )

    WatchlistItem.create(
        user_id: lisa.id,
        symbol: 'TSLA',
    )

    WatchlistItem.create(
        user_id: lisa.id,
        symbol: 'MSFT',
    )

    WatchlistItem.create(
        user_id: lisa.id,
        symbol: 'TWTR',
    )

    WatchlistItem.create(
        user_id: lisa.id,
        symbol: 'BABA',
    )

    WatchlistItem.create(
        user_id: lisa.id,
        symbol: 'C',
    )

    SNAPSHOTS.each do  |snapshot|
        date = Date.parse(snapshot[:time])
        balance = snapshot[:balance]
        PortfolioSnapshot.create({ date: date, balance: balance, user_id: guest.id })
    end
end



