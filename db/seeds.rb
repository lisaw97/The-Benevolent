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

fb = Stock.create!(
    company_name: 'Facebook, Inc.',
    symbol: 'FB'
)

twtr = Stock.create!(
    company_name: 'Twitter, Inc.',
    symbol: 'TWTR'
)

v = Stock.create!(
    company_name: 'Visa, Inc.',
    symbol: 'V'
)

c = Stock.create!(
    company_name: 'Citigroup, Inc.',
    symbol: 'C'
)

baba = Stock.create!(
    company_name: 'Alibaba Group Holding Ltd.',
    symbol: 'BABA'
)

Transaction.create(
    user_id: guest.id,
    shares: 2,
    cost: 234.54,
    symbol: tsla.symbol
)

Transaction.create(
    user_id: guest.id,
    symbol: aapl.symbol,
    shares: 2,
    cost: 234.54
)

Transaction.create(
    user_id: guest.id,
    shares: 4,
    cost: 234.54,
    symbol: tsla.symbol
)

Transaction.create(
    user_id: guest.id,
    shares: 7,
    cost: 186.62,
    symbol: baba.symbol
)

Transaction.create(
    user_id: lisa.id,
    symbol: aapl.symbol,
    shares: 5,
    cost: 234.54
)

Transaction.create(
    user_id: lisa.id,
    symbol: aapl.symbol,
    shares: 3,
    cost: 234.54
)

Transaction.create(
    user_id: lisa.id,
    symbol: v.symbol,
    shares: 4,
    cost: 179.74
)

WatchlistItem.create(
    user_id: guest.id,
    symbol: msft.symbol
)

WatchlistItem.create(
    user_id: guest.id,
    symbol: c.symbol
)

WatchlistItem.create(
    user_id: guest.id,
    symbol: fb.symbol
)

WatchlistItem.create(
    user_id: guest.id,
    symbol: twtr.symbol
)

WatchlistItem.create(
    user_id: lisa.id,
    symbol: tsla.symbol,
)

WatchlistItem.create(
    user_id: lisa.id,
    symbol: msft.symbol,
)

WatchlistItem.create(
    user_id: lisa.id,
    symbol: twtr.symbol,
)

WatchlistItem.create(
    user_id: lisa.id,
    symbol: baba.symbol,
)

WatchlistItem.create(
    user_id: lisa.id,
    symbol: c.symbol,
)


