import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";
const expenseData = [
  { month: "Jan", amount: 7500 },
  { month: "Feb", amount: 8200 },
  { month: "Mar", amount: 8942 },
  { month: "Apr", amount: 7800 },
  { month: "May", amount: 8500 },
  { month: "Jun", amount: 7900 },
];

const investmentData = [
  { month: "Jan", stocks: 5000, bonds: 3000, crypto: 2000 },
  { month: "Feb", stocks: 5500, bonds: 3200, crypto: 2400 },
  { month: "Mar", stocks: 6000, bonds: 3400, crypto: 2700 },
  { month: "Apr", stocks: 5800, bonds: 3600, crypto: 2500 },
  { month: "May", stocks: 6200, bonds: 3800, crypto: 2900 },
  { month: "Jun", stocks: 6500, bonds: 4000, crypto: 3100 },
];

const savingsData = [
  { month: "Jan", amount: 5000 },
  { month: "Feb", amount: 7000 },
  { month: "Mar", amount: 6500 },
  { month: "Apr", amount: 9000 },
  { month: "May", amount: 11000 },
  { month: "Jun", amount: 9500 },
  { month: "Jul", amount: 12000 },
  { month: "Aug", amount: 14000 },
  { month: "Sep", amount: 13000 },
  { month: "Oct", amount: 16000 },
  { month: "Nov", amount: 17000 },
  { month: "Dec", amount: 19000 },
];

const ExpenseCharts = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
      <h2 className="textDark mb-4 font-lexend text-lg font-semibold">
        Monthly Expenses
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={expenseData}>
            <defs>
              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
            />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#expenseGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const InvestmentDistributionChart = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
      <h2 className="textDark mb-4 text-lg font-semibold">
        Investment Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={investmentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
            />
            <Bar dataKey="stocks" stackId="a" fill="#3b82f6" />
            <Bar dataKey="bonds" stackId="a" fill="#10b981" />
            <Bar dataKey="crypto" stackId="a" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const SavingsChart = () => {
  return (
    <div className="col-span-full rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
      <h2 className="textDark mb-4 font-lexend text-lg font-semibold">
        Savings Trend
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={savingsData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#374151" />
            <YAxis stroke="#374151" />
            <Tooltip
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="url(#colorGradient)"
              strokeWidth={3}
              dot={{ fill: "#8b5cf6", r: 5 }}
              activeDot={{ r: 7 }}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export { ExpenseCharts, InvestmentDistributionChart, SavingsChart };
