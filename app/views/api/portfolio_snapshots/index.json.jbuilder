@portfolio_snapshots.each do |snapshot|
    json.set! snapshot.id do
        json.partial! '/api/portfolio_snapshots/portfolio_snapshot', portfolio_snapshot: snapshot
    end
end