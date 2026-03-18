import { cn } from "@/lib/utils"

export interface Matchup {
  myTeam: string
  mySeed: number
  theirTeam: string
  theirSeed: number
  spread: string
  role: "dog" | "fav" | "tbd"
  tipTime: string
  network: string
  date: string
  region: string
  opponent: string
}

interface MatchupCardProps {
  matchup: Matchup
}

export function MatchupCard({ matchup }: MatchupCardProps) {
  const {
    myTeam,
    mySeed,
    theirTeam,
    theirSeed,
    spread,
    role,
    tipTime,
    network,
    date,
    region,
    opponent,
  } = matchup

  const cardClass = cn(
    "relative overflow-hidden rounded-[10px] border bg-white p-3.5 px-4 shadow-sm",
    "border-[#d6e4f0]",
    "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-l-[3px]",
    role === "fav" && "before:bg-[#16a34a]",
    role === "dog" && "before:bg-[#0057a8]",
    role === "tbd" && "before:bg-[#b0c4d8]"
  )

  const spreadClass = cn(
    "font-display text-xl tracking-wide",
    spread.startsWith("+") && "text-[#0057a8]",
    spread.startsWith("-") && "text-[#16a34a]",
    spread === "TBD" && "text-[#a0b8cc] text-base"
  )

  const roleBadgeClass = cn(
    "text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full uppercase",
    role === "dog" && "bg-[#0057a8]/10 text-[#0057a8]",
    role === "fav" && "bg-[#16a34a]/12 text-[#16a34a]",
    role === "tbd" && "bg-[#b0c4d8]/25 text-[#7a9bb5]"
  )

  return (
    <div className={cardClass}>
      {/* Region label */}
      <div className="absolute top-3.5 right-3.5 text-[9px] font-bold tracking-wider uppercase text-[#a0b8cc]">
        {region}
      </div>

      {/* Teams row */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="flex-1">
          <span className="text-[15px] font-semibold text-[#0a1f3c]">{myTeam}</span>
          <span className="ml-1 text-[10px] font-semibold text-[#a0b8cc]">#{mySeed}</span>
        </div>
        <span className="text-[11px] font-bold text-[#d0e0ec] shrink-0">VS</span>
        <div className="flex-1">
          <span className="text-[15px] font-medium text-[#7a9bb5]">{theirTeam}</span>
          <span className="ml-1 text-[10px] font-semibold text-[#a0b8cc]">#{theirSeed}</span>
        </div>
      </div>

      {/* Time row */}
      <div className="flex items-center gap-2 mb-2.5 text-[11px] text-[#7a9bb5]">
        <span className="font-bold text-[#4a7a9b]">{tipTime}</span>
        <span className="bg-[#eef4fa] text-[#4a7a9b] font-bold text-[10px] tracking-wide px-1.5 py-0.5 rounded">
          {network}
        </span>
        <span className="text-[#a0b8cc]">{date}</span>
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between">
        <span className={spreadClass}>{spread}</span>
        <span className={roleBadgeClass}>
          {role === "dog" ? "Underdog" : role === "fav" ? "Favorite" : "Pending"}
        </span>
        <span className="text-xs text-[#a0b8cc]">
          vs <span className="text-[#4a7a9b] font-semibold">{opponent}</span>
        </span>
      </div>
    </div>
  )
}
