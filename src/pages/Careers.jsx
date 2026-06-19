import './Careers.scss'

const jobs = [
  {
    title: 'Business Development Associate',
    type: 'FULL-TIME',
    mode: 'On-site',
    location: 'Ekantakunna Rd, Lalitpur',
    desc: 'The Business Development Associate will focus on identifying new business opportunities, building strong client relationships, and driving company growth. Responsibilities include generating sales leads, conducting market research, creating and delivering effective presentations, and collaborating with the internal team to meet client needs. This is a full-time, on-site role based in Kathmandu, Nepal.',
    deadline: 'Jun 30, 2026',
  },
  {
    title: 'AI Video Editor & Content Creator',
    type: 'FULL-TIME',
    mode: 'On-site',
    location: 'Ekantakunna Rd, Lalitpur',
    desc: 'We are seeking a forward-thinking Video Editor who has transitioned from traditional editing to the world of Generative AI. You won\'t just be cutting clips; you will be generating them. You will use text-to-video and image-to-video AI models to create high-quality, engaging content from scratch.',
    deadline: 'Jun 30, 2026',
  },
  {
    title: 'Content Creator / Presenter (Fresher)',
    type: 'FULL-TIME',
    mode: 'Hybrid',
    location: 'Ekantakunna Rd, Lalitpur',
    desc: 'We\'re looking for a confident, curious Content Creator / Presenter who enjoys being on camera and explaining ideas clearly. This role is ideal for a fresher who wants to grow in tech content, branding, and digital media. You don\'t need to be perfect on day one—we care more about clarity, willingness to learn, and consistency.',
    deadline: 'Jun 30, 2026',
  },
]

export default function Careers() {
  return (
    <div className="careers-page">
      <section className="page-hero">
        <div className="page-title-row">
          <div className="page-icon-badge">
            <svg viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
          </div>
          <h1>CAREERS</h1>
        </div>
        <span className="subtitle">Join a team of engineers and builders solving real-world problems.</span>
        <p>We're always looking for curious, collaborative people who love shipping great software and learning along the way. Explore our open roles below.</p>
      </section>

      <section className="careers-page__jobs">
        <div className="container">
          <div className="careers-page__grid">
            {jobs.map((job, i) => (
              <div key={i} className="careers-page__job-card">
                <div className="careers-page__job-header">
                  <h3>{job.title}</h3>
                  <div className="careers-page__job-badges">
                    <span className="badge badge--type">{job.type}</span>
                    <span className="badge badge--mode">{job.mode}</span>
                  </div>
                </div>
                <p className="careers-page__job-location">📍 {job.location}</p>
                <p className="careers-page__job-desc">{job.desc}</p>
                <p className="careers-page__job-deadline">⏰ Apply by {job.deadline}</p>
                <div className="careers-page__job-actions">
                  <button className="btn-outline-sm">View details</button>
                  <button className="btn-apply">Apply now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
