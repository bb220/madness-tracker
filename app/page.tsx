import { MatchupCard, type Matchup } from "@/components/matchup-card"

const matchups: Matchup[] = [
  {
    myTeam: "Ohio State",
    mySeed: 8,
    myScore: 64,
    theirTeam: "TCU",
    theirSeed: 9,
    theirScore: 66,
    spread: "-2.5",
    role: "fav",
    tipTime: "12:15 PM ET",
    network: "CBS",
    date: "Thu Mar 19",
    region: "East",
    opponent: "Brady",
  },
  {
    myTeam: "High Point",
    mySeed: 12,
    myScore: 83,
    theirTeam: "Wisconsin",
    theirSeed: 5,
    theirScore: 82,
    spread: "+10.5",
    role: "dog",
    tipTime: "1:50 PM ET",
    network: "TBS",
    date: "Thu Mar 19",
    region: "West",
    opponent: "Cole",
  },
  {
    myTeam: "Gonzaga",
    mySeed: 3,
    myScore: 73,
    theirTeam: "Kennesaw State",
    theirSeed: 14,
    theirScore: 64,
    spread: "-21.5",
    role: "fav",
    tipTime: "10:00 PM ET",
    network: "TBS",
    date: "Thu Mar 19",
    region: "West",
    opponent: "Cole",
  },
  {
    myTeam: "Houston",
    mySeed: 2,
    myScore: 78,
    theirTeam: "Idaho",
    theirSeed: 15,
    theirScore: 47,
    spread: "-23.5",
    role: "fav",
    tipTime: "10:10 PM ET",
    network: "truTV",
    date: "Thu Mar 19",
    region: "South",
    opponent: "Nick",
  },
  {
    myTeam: "Akron",
    mySeed: 12,
    myScore: 71,
    theirTeam: "Texas Tech",
    theirSeed: 5,
    theirScore: 91,
    spread: "+7.5",
    role: "dog",
    tipTime: "12:40 PM ET",
    network: "truTV",
    date: "Fri Mar 20",
    region: "Midwest",
    opponent: "Greg",
  },
  {
    myTeam: "Virginia",
    mySeed: 3,
    myScore: 82,
    theirTeam: "Wright State",
    theirSeed: 14,
    theirScore: 73,
    spread: "-18.5",
    role: "fav",
    tipTime: "1:50 PM ET",
    network: "TBS",
    date: "Fri Mar 20",
    region: "Midwest",
    opponent: "Greg",
  },
  {
    myTeam: "UCF",
    mySeed: 10,
    myScore: 0,
    theirTeam: "UCLA",
    theirSeed: 7,
    theirScore: 0,
    spread: "+5.5",
    role: "dog",
    tipTime: "7:25 PM ET",
    network: "TBS",
    date: "Fri Mar 20",
    region: "East",
    opponent: "Brady",
  },
  {
    myTeam: "Prairie View A&M",
    mySeed: 16,
    myScore: 0,
    theirTeam: "Florida",
    theirSeed: 1,
    theirScore: 0,
    spread: "+35.5",
    role: "dog",
    tipTime: "9:25 PM ET",
    network: "TNT",
    date: "Fri Mar 20",
    region: "South",
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
