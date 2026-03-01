import type { Metadata } from "next";
import "./globals.css";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export const metadata: Metadata = {
    title: "Tushar Jadhav | Azure Data Engineer – Databricks, PySpark, Delta Lake, Microsoft Fabric, SQL, BigData",
    description: "Portfolio of Tushar Jadhav, a proficient Azure Data Engineer with 3.6+ years of experience in Azure Data Factory (ADF), Databricks, PySpark, Azure Synapse Analytics, Delta Lake, Microsoft Fabric, SQL, Big Data pipelines, and cloud-based ETL solutions. Open to opportunities in 2026.",
    keywords: [
        "Azure Data Engineer", "Azure Data Factory", "Databricks", "PySpark", "Delta Lake",
        "Microsoft Fabric", "Azure Synapse Analytics", "Big Data", "ETL", "SQL",
        "ADLS Gen2", "Azure DevOps", "CI/CD", "Data Pipelines", "Spark SQL",
        "Cloud Data Engineering", "Tushar Jadhav", "Data Engineer Portfolio 2026"
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased min-h-screen bg-background text-foreground">
                <ScrollIndicator />
                {children}
            </body>
        </html>
    );
}
