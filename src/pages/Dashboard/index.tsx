import css from './index.module.scss';
import { data } from "@/data";
import Card from './Card';
import Statistics from "@/pages/Dashboard/Statistics";
import Orders from "@/pages/Dashboard/Orders";
import { useState } from "react";

const Dashboard = () => {
    const [_, setActiveSelect] = useState<string>("");

    return (
        <div className={css.container}>
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>Dashboard</span>
                        <div className={css.durationButton}>
                            <select
                                onChange={(e) => setActiveSelect(e.target.value)}
                            >
                                <option value="week">1 week</option>
                                <option value="month">1 month</option>
                                <option value="year">1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.cards}>
                        {data.dashboardData().map((card) =>
                            <Card key={card.title} {...card}/>
                        )}
                    </div>
                </div>
                <Statistics/>
            </div>
            <Orders/>
        </div>
    );
};

export default Dashboard;