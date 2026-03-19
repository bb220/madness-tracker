import { MatchupCard, type Matchup } from "@/components/matchup-card"

const matchups: Matchup[] = [
  {
    myTeam: "McNeese",
    mySeed: 12,
    myScore: 0,
    theirTeam: "Vanderbilt",
    theirSeed: 5,
    theirScore: 0,
    spread: "+11.5",
    role: "dog",
    tipTime: "3:15 PM ET",
    network: "truTV",
    date: "Thu Mar 19",
    region: "South",
    opponent: "Raj",
  },
  {
    myTeam: "Illinois",
    mySeed: 3,
    myScore: 0,
    theirTeam: "Penn",
    theirSeed: 14,
    theirScore: 0,
    spread: "-25.5",
    role: "fav",
    tipTime: "9:25 PM ET",
    network: "TNT",
    date: "Thu Mar 19",
    region: "South",
    opponent: "Cole",
  },
  {
    myTeam: "Idaho",
    mySeed: 15,
    myScore: 0,
    theirTeam: "Houston",
    theirSeed: 2,
    theirScore: 0,
    spread: "+23.5",
    role: "dog",
    tipTime: "10:10 PM ET",
    network: "truTV",
    date: "Thu Mar 19",
    region: "South",
    opponent: "Dave",
  },
  {
    myTeam: "Santa Clara",
    mySeed: 10,
    myScore: 0,
    theirTeam: "Kentucky",
    theirSeed: 7,
    theirScore: 0,
    spread: "+3.5",
    role: "dog",
    tipTime: "12:15 PM ET",
    network: "CBS",
    date: "Fri Mar 20",
    region: "Midwest",
    opponent: "Nick",
  },
  {
    myTeam: "Tennessee",
    mySeed: 6,
    myScore: 0,
    theirTeam: "Miami (OH)",
    theirSeed: 11,
    theirScore: 0,
    spread: "-11.5",
    role: "tbd",
    tipTime: "4:25 PM ET",
    network: "TBS",
    date: "Fri Mar 20",
    region: "Midwest",
    opponent: "Greg",
  },
  {
    myTeam: "Clemson",
    mySeed: 8,
    myScore: 0,
    theirTeam: "Iowa",
    theirSeed: 9,
    theirScore: 0,
    spread: "+2.5",
    role: "dog",
    tipTime: "6:50 PM ET",
    network: "TNT",
    date: "Fri Mar 20",
    region: "South",
    opponent: "Austin",
  },
  {
    myTeam: "Purdue",
    mySeed: 2,
    myScore: 0,
    theirTeam: "Queens",
    theirSeed: 15,
    theirScore: 0,
    spread: "-25.5",
    role: "fav",
    tipTime: "7:35 PM ET",
    network: "truTV",
    date: "Fri Mar 20",
    region: "West",
    opponent: "Greg",
  },
  {
    myTeam: "Cal Baptist",
    mySeed: 13,
    myScore: 0,
    theirTeam: "Kansas",
    theirSeed: 4,
    theirScore: 0,
    spread: "+14.5",
    role: "dog",
    tipTime: "9:45 PM ET",
    network: "CBS",
    date: "Fri Mar 20",
    region: "East",
    opponent: "Nick",
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
