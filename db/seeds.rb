# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Stock.delete_all
Transaction.delete_all
WatchlistItem.delete_all

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

tsla = Stock.create!(
    company_name: 'Tesla, Inc.',
    symbol: 'TSLA'
)

aapl = Stock.create!(
    company_name: 'Apple, Inc.',
    symbol: 'AAPL'
)

msft = Stock.create!(
    company_name: 'Microsoft Corp.',
    symbol: 'MSFT'
)

Transaction.create!(
    user_id: guest.id,
    stock_id: tsla.id,
    shares: 2,
    cost: 234.54
)

Transaction.create!(
    user_id: guest.id,
    stock_id: aapl.id,
    shares: 2,
    cost: 234.54
)

Transaction.create!(
    user_id: lisa.id,
    stock_id: aapl.id,
    shares: 5,
    cost: 234.54
)

Transaction.create!(
    user_id: lisa.id,
    stock_id: aapl.id,
    shares: 3,
    cost: 234.54
)

WatchlistItem.create!(
    user_id: guest.id,
    stock_id: msft.id,
)

WatchlistItem.create!(
    user_id: lisa.id,
    stock_id: tsla.id,
)

WatchlistItem.create!(
    user_id: lisa.id,
    stock_id: msft.id,
)


