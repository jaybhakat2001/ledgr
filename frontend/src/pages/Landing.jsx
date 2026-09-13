import Heading from '../components/Heading'


function FeatureCard({ title, description }) {
    return (
        <div className="border border-slate-200 p-5">
            <div className="font-semibold mb-1">{title}</div>
            <div className="text-sm text-slate-600">{description}</div>
        </div>
    )
}

function Landing() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <Heading text="Every unit, accounted for." color="text-slate-900" size="text-5xl" />
            <p className="text-slate-600 mt-4 mb-10">
                Ledgr replaces the notebook and the spreadsheet with one running record.
            </p>
            <div className="grid grid-cols-3 gap-4 text-left">
                <FeatureCard title="Log stock like a ledger" description="Every restock and sale is a dated entry." />
                <FeatureCard title="Know before you run out" description="Set a reorder line, get flagged the moment stock dips under." />
                <FeatureCard title="One shop or five" description="Give staff limited access, keep reports for owners only." />
            </div>

        </div>
    )
}

export default Landing