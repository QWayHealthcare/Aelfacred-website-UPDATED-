import { sources } from './config.mjs';

// Original editorial copy based on the supplied AelfaCred content and linked sources.
// Every article is rendered into its own complete, indexable HTML document.
export const articles = [
  {
    slug: 'provider-credentialing-checklist', category: 'Credentialing', label: 'THE PRACTICAL CHECKLIST', icon: 'checklist',
    title: 'Provider credentialing checklist: from first document to ongoing monitoring',
    description: 'A practical healthcare provider credentialing checklist covering provider data, primary source verification, payer enrollment, signatures and renewals.',
    excerpt: 'Build a complete provider file, assign the next action and keep approval requirements visible from day one.',
    keywords: ['provider credentialing checklist', 'healthcare credentialing process', 'medical provider credentialing'],
    takeaway: 'A complete file is only the beginning. A reliable credentialing checklist also identifies the owner, evidence and next action for every requirement.',
    intro: 'A new provider joins your organization. Their start date is approaching, documents are arriving through different channels, and several payer applications need attention. A provider credentialing checklist turns that pressure into an organized sequence of decisions. It helps your team see what is ready, what needs verification and what is still waiting on someone else.',
    parts: [
      { id: 'define-scope', title: '1. Define the provider, organization and payer scope', paragraphs: [
        'Start with the work you actually need to complete. Identify the provider’s role, specialty, practice locations, relevant facilities and intended payer relationships. An individual physician application is different from a group enrollment or a facility application. Treat each requirement as a distinct work item rather than assuming one approval covers everything.',
        'Record the requested start date as a planning milestone, not as a promised approval date. Confirm each payer’s current application route and prerequisites. If a location or group relationship is changing, establish which records must be updated and who is responsible for that update.'
      ] },
      { id: 'collect-data', title: '2. Collect and reconcile the provider file', paragraphs: [
        'Create a consistent provider profile before populating applications. Compare legal name, NPI, contact details, practice addresses and applicable organizational information across the records you will use. Resolve mismatches early; a correct document attached to an inconsistent application can still create rework.'
      ], bullets: ['Current professional licenses and relevant registrations.', 'Education, training, work history and explanations where requested.', 'Board certification, professional liability coverage and privileges information, as applicable.', 'Payer-specific forms, disclosures, authorizations and supporting documents.', 'CAQH profile information and its current attestation status where required.'] },
      { id: 'verify-submit', title: '3. Verify, review and submit with a traceable record', paragraphs: [
        'Collection and verification are separate tasks. A copy of a license provides information to check; it does not automatically establish current status. Use the appropriate primary source for each required credential and preserve the verification date, result and supporting evidence according to your organization’s process.',
        'Before submission, review the file for completeness, current documents and required signatures. AelfaCred’s auto-fill functionality can help reuse provider information across forms, while e-sign status tracking keeps outstanding signatures visible. The final review remains essential: automation should support accuracy, not carry an unverified error into several applications.'
      ] },
      { id: 'track-outcomes', title: '4. Track the outcome, then schedule what comes next', paragraphs: [
        'After submission, capture the reference number, submission date, current status, assigned owner and next follow-up date. Keep a record of additional information requests and responses. “Submitted” should never be used as a substitute for “approved,” and approval should not be assumed to establish every payer-specific effective date.',
        'When an outcome arrives, communicate the relevant decision and dates to the teams that need them. Then add license expirations, CAQH attestations, payer recredentialing and enrollment revalidation to the ongoing calendar. AelfaCred brings these activities into a connected workspace so the checklist continues beyond the initial application.'
      ] },
      { id: 'weekly-review', title: 'Make the checklist part of your weekly operating rhythm', paragraphs: [
        'Review exceptions rather than rereading every completed task. Which file is waiting on a provider? Which verification needs clarification? Which submitted application has no recorded next action? A short, owner-led review makes the checklist useful to the entire team.',
        'If your workload spans multiple providers or locations, combine a standardized checklist with a centralized platform and a defined support model. Explore AelfaCred’s credentialing services when your team needs help executing the work, or its software when your priority is better coordination and visibility.'
      ] }
    ],
    links: [['Explore credentialing services', '/services/'], ['See provider data workflows', '/platform/']],
    references: [sources.cms, sources.caqh], related: ['credentialing-vs-payer-enrollment', 'primary-source-verification']
  },
  {
    slug: 'credentialing-vs-payer-enrollment', category: 'Enrollment', label: 'KNOW THE DIFFERENCE', icon: 'network',
    title: 'Credentialing vs. payer enrollment: what healthcare teams need to know',
    description: 'Understand provider credentialing, payer enrollment and contracting, and learn how to coordinate each workflow without confusing application statuses.',
    excerpt: 'Three connected processes. Different decisions. Understand what each milestone means for provider operations.',
    keywords: ['credentialing vs payer enrollment', 'provider enrollment services', 'insurance credentialing'],
    takeaway: 'Credentialing evaluates qualifications. Enrollment establishes or updates payer participation records. Contracting addresses the terms of a relationship. Track their outcomes separately.',
    intro: '“Is the provider ready?” sounds like a simple question. The answer can depend on credentialing review, a payer’s enrollment decision, the applicable contract and the effective dates attached to each record. Using these terms interchangeably makes it harder to identify what is still outstanding. A shared vocabulary gives credentialing, operations and billing teams a clearer handoff.',
    parts: [
      { id: 'credentialing', title: 'What is provider credentialing?', paragraphs: [
        'Provider credentialing is the evaluation of a healthcare professional’s qualifications against the requirements of an organization or payer. Depending on the setting, the review can include licensure, education, training, work history, professional references and other relevant records. Primary source verification supports the review by checking information with the appropriate issuing or authoritative source.',
        'The outcome is a credentialing decision within a defined context. A hospital’s process and a health plan’s process may have different requirements. One completed review should not be treated as proof that every organization or payer has reached the same decision.'
      ] },
      { id: 'enrollment', title: 'What is payer enrollment?', paragraphs: [
        'Payer enrollment is the administrative process of establishing or maintaining a provider’s record with a payer. It can involve individual and group details, service locations, supporting documentation, signatures and payer-specific information. The precise steps depend on the payer, provider type and type of enrollment request.',
        'For Medicare, CMS provides enrollment tools and guidance through PECOS. Commercial payers and state Medicaid programs have their own processes. Maintain a separate application record for each relevant payer and relationship so your team can see what was submitted, what was requested and what was approved.'
      ] },
      { id: 'contracting', title: 'Where contracting fits', paragraphs: [
        'Contracting concerns the terms of the relationship between the provider or organization and a payer. A credentialing review does not by itself establish negotiated terms or guarantee network participation. Likewise, an application acknowledgement is not the same as an approved enrollment or an effective agreement.',
        'Instead of using a single “complete” flag, record the specific milestone and its evidence. This makes the status meaningful to someone who was not involved in the original conversation.'
      ], bullets: ['Credentialing: record the review outcome and any remaining conditions.', 'Enrollment: record the payer decision and the relevant provider, group and location details.', 'Contracting: retain the applicable agreement information and confirmed effective dates.', 'Operational handoff: communicate the verified scope and outstanding dependencies.'] },
      { id: 'coordinate', title: 'Coordinate the workflows without merging their statuses', paragraphs: [
        'Use one provider profile as the common information source, then track each related workflow independently. Assign an owner and next action to missing documents, verification questions, payer follow-up and signatures. A centralized record helps prevent a change of address or an updated license from being captured in only one part of the process.',
        'AelfaCred connects provider information, verification records, enrollment activity and ongoing monitoring. Teams can manage applications and follow-ups in the software, use managed support, or choose a hybrid approach. The purpose is clear accountability across the lifecycle, rather than an oversimplified promise that a single action completes every requirement.'
      ] },
      { id: 'handoff', title: 'Ask a better readiness question', paragraphs: [
        'Before handing a provider to scheduling or billing operations, ask: ready for which organization, payer, location and effective date? Then confirm the answer against the relevant documentation. This question makes missing dependencies easier to identify and reduces the chance that teams act on an assumed approval.',
        'Keep monitoring after the handoff. A current license, a payer recredentialing request and a Medicare revalidation are different obligations. Connecting their deadlines to the same provider record helps your organization maintain continuity while preserving the detail each process requires.'
      ] }
    ], links: [['Explore payer enrollment support', '/services/'], ['View the provider lifecycle', '/platform/']],
    references: [sources.cms, sources.revalidation], related: ['provider-credentialing-checklist', 'recredentialing-and-expiration-tracking']
  },
  {
    slug: 'caqh-attestation-management', category: 'Monitoring', label: 'STAY AHEAD OF THE NEXT ATTESTATION', icon: 'calendar',
    title: 'CAQH attestation management: keep provider profiles current',
    description: 'Build a practical CAQH attestation workflow with current provider data, document checks, assigned owners, reminders and a clear completion record.',
    excerpt: 'Turn recurring profile updates into a clear, accountable workflow instead of another last-minute reminder.',
    keywords: ['CAQH attestation management', 'CAQH profile updates', 'provider data management'],
    takeaway: 'An attestation reminder is the start of an action, not evidence of completion. Record the review, the actual attestation and the next due date.',
    intro: 'Keeping a CAQH profile current is a recurring responsibility. Practice details change, credentials renew and documents need replacement. A repeatable attestation workflow helps the provider and credentialing team understand what to review and when to act. It also makes the difference between “reminder sent” and “profile updated” visible.',
    parts: [
      { id: 'purpose', title: 'What CAQH attestation accomplishes', paragraphs: [
        'The CAQH Provider Data Portal lets clinicians and practice staff maintain professional information and share it with authorized participating organizations. Attestation confirms the profile information as part of that process. It is not a substitute for a payer’s credentialing decision, an enrollment approval or a contract.',
        'CAQH is now presented under the DataSpring brand, while the CAQH Provider Data Portal remains in use. Follow the current instructions and due date shown in the portal. Maintain a clear distinction between profile maintenance, permission to share information and each payer’s subsequent review.'
      ] },
      { id: 'review', title: 'Review the information before attesting', paragraphs: [
        'A recurring task should involve a real review, not simply a date change on a spreadsheet. Compare the profile with your current provider record and identify any information that has changed since the last review. Confirm the applicable supporting documents are readable and current.',
        'When several staff members contribute to a file, nominate one coordinator to collect updates and resolve discrepancies. Keep the provider involved wherever their review or authorization is required. Avoid a workflow that makes responsibilities unclear simply because a reminder was sent to a shared mailbox.'
      ], bullets: ['Review practice addresses and contact information.', 'Check professional license, registration and coverage details as applicable.', 'Confirm training, work history and other requested profile fields remain accurate.', 'Review uploaded documents and replace superseded records where needed.', 'Confirm the relevant sharing authorizations and unresolved portal messages.'] },
      { id: 'reminders', title: 'Build reminders around ownership and completion', paragraphs: [
        'Maintain the next attestation date with the responsible person and the action needed. Use reminders early enough to allow time for missing documents or provider review. When the first reminder does not produce an update, a defined escalation route is more useful than an indefinite series of identical emails.',
        'AelfaCred tracks upcoming CAQH attestation dates and provides reminders that help teams manage follow-up. Keep the final confirmation in the appropriate record after the attestation is completed. Tracking supports the process; it does not mean the software has independently attested on the provider’s behalf.'
      ] },
      { id: 'changes', title: 'Respond to changes between scheduled reviews', paragraphs: [
        'Do not rely on the next scheduled attestation to discover a material change. A new practice address, updated coverage or a renewed license can trigger related updates before that date. Add a simple change-notification step to onboarding and ongoing provider support so the credentialing team receives the information promptly.',
        'A centralized provider profile makes it easier to identify where a change may need to be reflected. Review the portal, affected applications and relevant payer records according to their requirements. Updating one system should not be assumed to update every payer or organizational record automatically.'
      ] },
      { id: 'review-queue', title: 'Use a short, actionable attestation queue', paragraphs: [
        'Organize your queue into upcoming review, awaiting information, ready for provider action and completion recorded. Each item should have an owner and a next action. This separates work your team can move forward today from work waiting on an external dependency.',
        'For groups managing many providers, this approach creates continuity when staff responsibilities change. Explore AelfaCred’s monitoring workflows to connect attestation dates with credential expirations, document collection and provider operations in one workspace.'
      ] }
    ], links: [['Explore CAQH tracking in AelfaCred', '/platform/'], ['Discuss ongoing credentialing support', '/contact/']],
    references: [sources.caqh], related: ['recredentialing-and-expiration-tracking', 'credentialing-software-provider-onboarding']
  },
  {
    slug: 'recredentialing-and-expiration-tracking', category: 'Monitoring', label: 'CONTINUITY STARTS BEFORE THE DEADLINE', icon: 'shield',
    title: 'Recredentialing and credential expiration tracking: a proactive approach',
    description: 'Learn how to manage recredentialing, Medicare revalidation and credential expirations with separate deadlines, clear ownership and actionable reminders.',
    excerpt: 'Different renewal clocks need different workflows. Keep licenses, payer reviews and enrollment obligations connected.',
    keywords: ['provider recredentialing', 'credential expiration tracking', 'Medicare revalidation'],
    takeaway: 'License renewal, payer recredentialing and enrollment revalidation are separate obligations. Track each one by its actual due date and required outcome.',
    intro: 'Initial credentialing is a milestone, not the end of provider maintenance. A license may expire, a payer may request recredentialing, or an enrollment record may come due for revalidation. These events follow different rules and can affect different parts of operations. A proactive tracking model keeps those differences visible while giving teams one place to coordinate action.',
    parts: [
      { id: 'separate-clocks', title: 'Separate the renewal clocks', paragraphs: [
        'Credential expiration tracking focuses on time-sensitive items such as professional licenses, registrations, coverage and applicable certifications. Recredentialing is a recurring review of a provider’s qualifications under an organization’s or payer’s requirements. Revalidation renews or confirms an enrollment record, such as Medicare enrollment.',
        'Do not assign one universal renewal interval to every item. Use the actual document expiration, payer notice or authoritative enrollment record. CMS states that Medicare providers and suppliers generally revalidate every five years, with DMEPOS suppliers generally on a three-year cycle; off-cycle revalidations can also occur. The provider’s actual notice and due date remain the operational reference.'
      ] },
      { id: 'inventory', title: 'Build a complete, maintainable inventory', paragraphs: [
        'Connect each monitored item to the right provider, credential type and relevant organization or payer. Record the due date, owner, supporting document and current action. Where a renewal affects a location or a payer record, identify that dependency rather than treating the replacement document as the final step.',
        'The supplied AelfaCred workflow includes tracking for items such as state licenses, DEA registrations, professional liability documents, board certifications, ACLS/BLS, privileges letters and CAQH attestations, as applicable. Select what is relevant to the provider and your requirements rather than imposing the same list on every specialty.'
      ] },
      { id: 'alerts', title: 'Use 30/60-day alerts as action prompts', paragraphs: [
        'AelfaCred’s document expiry summary supports 30/60-day alerts to help providers and credentialing teams see approaching deadlines. Pair each alert with the next step: request the renewed document, confirm an application has been started, resolve a missing signature or check the outcome with the responsible party.',
        'Some renewals need more lead time than a reminder window provides. Set your internal planning around the specific requirement and review exceptions early. An alert is most useful when it reaches a named owner who knows what evidence is needed to close the task.'
      ], bullets: ['Upcoming: identify the owner and verify the due date.', 'In progress: record what has been requested or submitted.', 'Waiting: document the external dependency and follow-up date.', 'Completed: retain the new evidence and update the next review date.'] },
      { id: 'revalidation', title: 'Give Medicare revalidation its own review', paragraphs: [
        'CMS publishes revalidation due dates and provides an online route through PECOS. Its guidance explains when to submit and what can happen when a provider does not revalidate on time. Check the current CMS information and the applicable contractor notice instead of assuming that a routine credential update meets the revalidation requirement.',
        'After submitting, continue tracking the application and respond to requests for information. Capture the final disposition and communicate relevant changes to the teams responsible for enrollment and billing operations.'
      ] },
      { id: 'visibility', title: 'Make exceptions visible to the right people', paragraphs: [
        'A useful review is more than a list sorted by date. Highlight items with no owner, missing evidence, unresolved requests or a due date that is too close for the next planned action. Give leaders a view of the workload while keeping the detailed provider-level record available to staff.',
        'AelfaCred connects upcoming dates, reminders and managed support so organizations can maintain a repeatable renewal process. Explore a software-led or hybrid approach when your team needs more consistency across multiple providers and locations.'
      ] }
    ], links: [['Explore monitoring software', '/platform/'], ['View recredentialing services', '/services/']],
    references: [sources.revalidation, sources.caqh], related: ['caqh-attestation-management', 'provider-credentialing-checklist']
  },
  {
    slug: 'credentialing-software-provider-onboarding', category: 'Software', label: 'A CLEARER WAY TO ONBOARD', icon: 'layers',
    title: 'How credentialing software improves provider onboarding workflows',
    description: 'See how provider credentialing software connects data collection, application auto-fill, signatures, enrollment tracking and handoffs during onboarding.',
    excerpt: 'Connect data, documents and decisions so a new provider’s next step is easier to see and manage.',
    keywords: ['provider credentialing software', 'provider onboarding software', 'credentialing workflow automation'],
    takeaway: 'The most useful automation removes duplicate work while preserving clear ownership, review and evidence at every step.',
    intro: 'Provider onboarding involves more than collecting a set of documents. Credentialing staff, practice administrators, providers and payer contacts all contribute to a process with several dependencies. When the information is spread across email threads and spreadsheets, each handoff can create another search for the latest version. Credentialing software helps organize that work around a shared provider record.',
    parts: [
      { id: 'one-record', title: 'Begin with one reliable provider record', paragraphs: [
        'A centralized profile gives the team a common place to organize credentials, licenses, documents, enrollment information and relevant practice details. It helps staff distinguish current information from an outdated attachment and makes missing requirements easier to identify.',
        'Before moving information into a new platform, reconcile conflicting values and decide who will maintain the record. Software can make data easier to find, but it cannot make inconsistent source information accurate without review. Define a change process so updates remain coordinated after the first import or entry.'
      ] },
      { id: 'auto-fill', title: 'Use auto-fill to reduce repeated entry', paragraphs: [
        'Many applications request information that the organization has already collected. AelfaCred’s automatic form filling reuses provider information to help teams prepare forms with less repetitive entry. The practical benefit is time redirected toward checking completeness and resolving exceptions.',
        'Review the populated fields against the application’s current requirements. Payer-specific questions, disclosures and authorizations may still need attention. A strong workflow makes the review step obvious and records when an application is ready for signature or submission.'
      ] },
      { id: 'handoffs', title: 'Make signatures and handoffs visible', paragraphs: [
        'A nearly complete application can stall while a signature request sits in someone’s inbox. E-sign status tracking helps staff identify the applications awaiting provider or authorized-person action. Alerts and a clear owner make follow-up more structured than asking the whole team for an update.',
        'Apply the same principle to other handoffs. A verification question, a missing document and a payer response should each have an assigned next action. When ownership is visible, the next staff member can continue the work without rebuilding the full history from separate messages.'
      ] },
      { id: 'evaluate', title: 'Evaluate the workflow, not just the feature list', paragraphs: [
        'A useful software demonstration should follow a realistic provider journey. Ask the team to show how a file moves from information collection to verification, application preparation, signatures, enrollment follow-up and ongoing monitoring. Pay attention to how exceptions are handled, because those are often the tasks that consume the most coordination.',
        'Choose the operating model that matches your team’s capacity. With AelfaCred, software supports internal operations, managed services add credentialing assistance, and a hybrid model combines both. Agree on responsibilities so a feature does not become an unowned task.'
      ], bullets: ['Can staff identify missing information without opening several files?', 'How are outstanding signatures and payer follow-ups tracked?', 'Where are the latest documents and verification records stored?', 'How do renewal dates and CAQH attestations carry into ongoing work?', 'Which responsibilities stay with your team, and which receive managed support?'] },
      { id: 'measure', title: 'Measure improvement with your own operational data', paragraphs: [
        'Establish a baseline for the work your organization wants to improve. Examples include time spent collecting a complete file, applications returned for missing information, and tasks without a current owner or next action. Review the same measures after introducing a new workflow.',
        'Separate internal processing time from time spent waiting on an external organization. This distinction makes improvement discussions more useful and avoids attributing every delay to the same cause. Book an AelfaCred demo around your actual onboarding process to see where a connected workflow can make the biggest difference.'
      ] }
    ], links: [['Explore the AelfaCred platform', '/platform/'], ['Book a workflow-focused demo', '/contact/']],
    references: [sources.cms, sources.caqh], related: ['provider-credentialing-checklist', 'primary-source-verification']
  },
  {
    slug: 'primary-source-verification', category: 'Credentialing', label: 'FROM DOCUMENTS TO DOCUMENTED CONFIDENCE', icon: 'verify',
    title: 'Primary source verification in healthcare credentialing: a practical guide',
    description: 'Understand primary source verification, how it differs from document collection, and how to organize verification evidence and resolve discrepancies.',
    excerpt: 'Know what was checked, which source was used and what still needs review before the file moves forward.',
    keywords: ['primary source verification', 'healthcare credential verification', 'provider credentialing services'],
    takeaway: 'A document is information to review. Primary source verification checks the relevant credential with its issuing or authoritative source and records the result.',
    intro: 'Credentialing depends on reliable information. A provider may submit a license, training record or certification, but the credentialing team still needs to follow the verification requirements that apply to its setting. Primary source verification helps establish a documented basis for the review. The goal is a clear evidence trail, not simply a folder containing copies.',
    parts: [
      { id: 'definition', title: 'What primary source verification means', paragraphs: [
        'Primary source verification checks credential information with the original issuing body or an appropriate authoritative source. For a professional license, that may involve the relevant licensing authority. Education, training and certification may require different sources and methods under the applicable credentialing process.',
        'The exact scope, timing and acceptable verification methods depend on organizational policies, payer requirements and any applicable standards. Define those requirements before the work begins. Do not assume that every credential can be verified in the same way or that a prior verification is automatically current for a new review.'
      ] },
      { id: 'collection', title: 'Separate collection, verification and the review decision', paragraphs: [
        'Document collection gathers the information needed to begin. Verification checks the relevant facts. The credentialing review evaluates the file and determines the outcome. These activities are related, but they are not interchangeable.',
        'A clear workflow records when a document has been received, when verification has been completed and whether anything requires additional review. This prevents an uploaded attachment from being mistaken for a completed requirement and helps staff understand why a file is still pending.'
      ] },
      { id: 'evidence', title: 'Create a verification record someone else can understand', paragraphs: [
        'A useful verification record explains what was checked and what the check established. Maintain enough context for another authorized team member to understand the result without repeating the entire process. Preserve the supporting evidence in line with your organization’s policies.',
        'AelfaCred supports structured verification workflows and organized records within the provider lifecycle. Keeping verification activity connected to the provider profile makes it easier to see which requirements are complete and which still need attention.'
      ], bullets: ['Provider and credential or qualification being checked.', 'Source used and the date of verification.', 'Relevant identifiers needed to match the correct record.', 'Result, supporting evidence and any discrepancy noted.', 'Assigned reviewer, follow-up action and current disposition.'] },
      { id: 'exceptions', title: 'Give discrepancies a defined resolution path', paragraphs: [
        'A name mismatch, an unclear date or an incomplete response should not disappear into a free-text note. Record the question, the person responsible for resolving it and the evidence needed to move forward. Escalate findings through the organization’s credentialing process rather than treating them as routine data-entry corrections.',
        'Avoid silently overwriting conflicting information. Retain the context needed to understand the change and confirm the appropriate source before updating the provider record. Clear exception handling protects the quality of the file while keeping the team focused on the next useful action.'
      ] },
      { id: 'ongoing', title: 'Connect verification to ongoing credentialing', paragraphs: [
        'A verified file reflects information reviewed at a particular point in time. Credentials expire, providers change locations and recurring reviews introduce new requirements. Connect the verification record with the broader monitoring and recredentialing process so future work starts with an organized history.',
        'When selecting a credentialing support partner, ask how verification scope is agreed, how evidence is stored and how exceptions are reported. AelfaCred’s software and managed services can support these activities while your organization retains visibility into the work and the decisions that follow.'
      ] }
    ], links: [['Explore primary source verification support', '/services/'], ['See connected provider records', '/platform/']],
    references: [sources.qwayCredentialing, sources.caqh], related: ['provider-credentialing-checklist', 'credentialing-vs-payer-enrollment']
  }
];
