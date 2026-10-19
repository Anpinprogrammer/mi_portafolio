import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CircleDollarSign,
  MapPin,
  Package,
  Truck,
  Wallet,
} from 'lucide-react'
import type { Project } from '../data/content'

const CHART_BARS = [38, 54, 32, 77, 58, 87, 60, 96, 73, 100, 83, 112]

function MiniLines() {
  return (
    <div className="flex h-20 items-end gap-1.5">
      {CHART_BARS.map((height, index) => (
        <span
          key={index}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan/25 to-cyan/85"
          style={{ height: `${height / 1.2}%` }}
        />
      ))}
    </div>
  )
}

function WindowChrome({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="mock-top">
      <span className="mock-dots" />
      <span>{title}</span>
      {icon}
    </div>
  )
}

function FinancePreview() {
  return (
    <div className="preview-bg preview-finance">
      <div className="mock-window">
        <WindowChrome title="RUTANET / OVERVIEW" icon={<ArrowUpRight size={13} />} />

        <div className="p-4 sm:p-6">
          <div className="flex justify-between gap-2">
            <div>
              <span className="mock-caption">TOTAL BALANCE</span>
              <div className="font-display text-2xl font-bold text-white sm:text-4xl">
                $24,580<span className="text-cyan">.00</span>
              </div>
            </div>
            <div className="mock-icon">
              <Wallet size={22} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="mock-mini">
              <span className="mock-caption">REVENUE</span>
              <div className="text-lg font-semibold text-white">+18.4% ↗</div>
            </div>
            <div className="mock-mini">
              <span className="mock-caption">ACTIVITY</span>
              <div className="text-lg font-semibold text-white">32 trips</div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#0d1d30] p-3">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Monthly performance</span>
              <BarChart3 size={13} />
            </div>
            <MiniLines />
          </div>
        </div>
      </div>
    </div>
  )
}

const DELIVERY_STATS = [
  { value: '128', label: 'Orders' },
  { value: '94', label: 'On route' },
  { value: '34', label: 'Delivered' },
]

const DELIVERY_ORDERS = ['#GL-1052', '#GL-1053', '#GL-1054']

function LogisticsPreview() {
  return (
    <div className="preview-bg preview-logistics">
      <div className="mock-window">
        <WindowChrome title="GILAN / OPERATIONS" icon={<Truck size={13} />} />

        <div className="p-4 sm:p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <span className="mock-caption">LOGISTICS CENTER</span>
              <div className="font-display text-xl font-bold text-white sm:text-2xl">
                Delivery Overview
              </div>
            </div>
            <div className="mock-icon">
              <MapPin size={20} />
            </div>
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2">
            {DELIVERY_STATS.map(({ value, label }) => (
              <div key={label} className="mock-mini text-center">
                <div className="font-display text-lg font-bold text-white sm:text-xl">{value}</div>
                <div className="text-[9px] text-slate-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 rounded-xl border border-white/10 bg-[#10192c] p-3">
            {DELIVERY_ORDERS.map((order, index) => (
              <div
                key={order}
                className="flex items-center justify-between rounded-lg bg-white/[.035] p-2"
              >
                <div className="flex items-center gap-2 text-[10px] text-slate-300">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-violet-500/20">
                    <Package size={13} className="text-violet-300" />
                  </span>
                  {order}
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-[9px] ${
                    index === 2 ? 'bg-cyan/10 text-cyan' : 'bg-emerald-400/10 text-emerald-300'
                  }`}
                >
                  {index === 2 ? 'In transit' : 'Delivered'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function RetailPreview() {
  return (
    <div className="preview-bg preview-retail">
      <div className="mock-window">
        <WindowChrome title="MECATOS / BUSINESS HUB" icon={<Boxes size={13} />} />

        <div className="p-4 sm:p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <span className="mock-caption">BUSINESS INTELLIGENCE</span>
              <div className="font-display text-xl font-bold text-white sm:text-2xl">
                Sales Dashboard
              </div>
            </div>
            <div className="mock-icon">
              <CircleDollarSign size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="mock-mini">
              <div className="mock-caption">NET SALES</div>
              <div className="font-display text-xl font-bold text-white">$8,640</div>
              <div className="mt-2 text-[10px] text-emerald-300">↗ +12.8%</div>
            </div>
            <div className="mock-mini">
              <div className="mock-caption">TOTAL ORDERS</div>
              <div className="font-display text-xl font-bold text-white">1,284</div>
              <div className="mt-2 text-[10px] text-cyan">↗ +8.2%</div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#18122e] p-3">
            <div className="text-[10px] text-slate-400">Orders summary</div>
            <MiniLines />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Preview({ type }: { type: Project['type'] }) {
  if (type === 'finance') return <FinancePreview />
  if (type === 'logistics') return <LogisticsPreview />
  return <RetailPreview />
}
