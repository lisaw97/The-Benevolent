@portfolio_snapshots.each do |snapshot|
    json.set! snapshot.date do
        json.partial! '/api/portfolio_snapshots/portfolio_snapshot', portfolio_snapshot: snapshot
    end
end