import { MatchupCard, type Matchup } from "@/components/matchup-card"

const matchups: Matchup[] = [
  {
    myTeam: "Houston",
    mySeed: 2,
    myScore: 0,
    theirTeam: "Texas A&M",
    theirSeed: 10,
    theirScore: 0,
    spread: "-10.5",
    role: "fav",
    tipTime: "6:10 PM ET",
    network: "TNT",
    date: "Sat Mar 21",
    region: "South",
    opponent: "Brady",
  },
  {
    myTeam: "High Point",
    mySeed: 12,
    myScore: 0,
    theirTeam: "Arkansas",
    theirSeed: 4,
    theirScore: 0,
    spread: "+11.5",
    role: "dog",
    tipTime: "9:45 PM ET",
    network: "TBS",
    date: "Sat Mar 21",
    region: "West",
    opponent: "Greg",
  },
  {
    myTeam: "UCLA",
    mySeed: 7,
    myScore: 0,
    theirTeam: "UConn",
    theirSeed: 2,
    theirScore: 0,
    spread: "+4.5",
    role: "dog",
    tipTime: "8:45 PM ET",
    network: "TNT",
    date: "Sun Mar 22",
    region: "East",
    opponent: "Dave",
  },
]

export default function Home() {
  const underdogCount = matchups.filter((m) => m.role === "dog").length
  const favoriteCount = matchups.filter((m) => m.role === "fav").length
  const tbdCount = matchups.filter((m) => m.role === "tbd").length

  return (
    <main className="min-h-screen bg-[#f0f4f8] pb-9">
      <div className="max-w-sm mx-auto px-5">
        {/* Header */}
        <header className="pt-7 pb-1 mb-5">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#0057a8] font-semibold mb-1">
            March Madness
          </div>
          <h1 className="font-display text-[38px] tracking-wide text-[#0a1f3c] leading-none">
            {"Brandon's"}
            <br />
            Matchups
          </h1>
          <p className="text-xs text-[#a0b8cc] mt-1.5">
            {matchups.length} games · All regions
          </p>
        </header>

        {/* Cards */}
        <div className="space-y-2">
          {matchups.map((matchup, index) => (
            <MatchupCard key={index} matchup={matchup} />
          ))}
        </div>

        {/* Footer stats */}
        <footer className="mt-6 pt-4 border-t border-[#d6e4f0] flex justify-between text-[11px] text-[#a0b8cc]">
          <div className="text-center">
            <span className="block font-display text-xl text-[#0057a8]">
              {matchups.length}
            </span>
            Games
          </div>
          <div className="text-center">
            <span className="block font-display text-xl text-[#0057a8]">
              {underdogCount}
            </span>
            Underdog
          </div>
          <div className="text-center">
            <span className="block font-display text-xl text-[#16a34a]">
              {favoriteCount}
            </span>
            Favorite
          </div>
          <div className="text-center">
            <span className="block font-display text-xl text-[#b0c4d8]">
              {tbdCount}
            </span>
            TBD
          </div>
        </footer>
      </div>
    </main>
  )
}
