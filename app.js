import QRCode from 'qrcode';

/**
 * KawachAR — Industrial AR Safety & Worker Platform Engine
 * Full Dual-Portal Architecture with Phase 3 AR Modules & QR Certificate Verification
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==========================================
  // 1. CENTRALIZED I18N TRANSLATION DICTIONARY
  // ==========================================
  const I18N = {
    en: {
      brand_tagline: "Industrial Safety & AR Telemetry Shield",
      nav_landing_view: "Welcome Portal",
      nav_admin_view: "Admin Dashboard",
      nav_worker_view: "Worker Mobile App",
      nav_home: "Home",
      nav_admin_portal: "Admin Portal",
      nav_admin_sub: "Facility & Workers",
      nav_worker_app: "Worker Login",
      nav_worker_sub: "Android AR Client",
      
      // Landing Screen
      landing_badge: "Next-Generation Industrial Workforce Safety Platform",
      landing_title_main: "AR-Powered Safety Training for Industrial Workers",
      landing_title_p1: "Zero-Hardware AR Safety for",
      landing_title_p2: "Industrial Frontline Workers",
      landing_mission_desc: "KawachAR eliminates low safety-training retention by replacing passive classroom lectures with real-time smartphone AR hazard simulations. We remove costly VR headset barriers and provide verifiable digital safety certification for mining, steel, and mica workers across Jharkhand.",
      mission_tag_1: "Fixes Low Retention",
      mission_tag_2: "Zero-Cost Smartphone AR",
      mission_tag_3: "Verifiable DGMS Passports",
      btn_fill_demo: "Fill Demo Details",
      hero_img_tag: "Live AR Hazard Telemetry • Jharkhand Mining & Steel",
      
      lang_select_title: "Select Preferred Language",
      lang_select_sub: "Choose your native language. Changes apply immediately across all screens and flows.",
      lang_ai_badge: "AI-Translated (First Pass)",
      
      entry_portals_title: "Select Portal to Continue",
      entry_portals_sub: "Choose between administrative plant management or the frontline worker mobile experience.",
      portal_admin_badge: "Web Dashboard",
      portal_admin_title: "Admin Portal",
      portal_admin_desc: "Register industrial facilities, manage active department scopes, enroll frontline workers, generate EMP IDs, and monitor DGMS compliance audit logs.",
      portal_admin_feat_1: "Industry & MSME Udyam Registration",
      portal_admin_feat_2: "Admin Worker Enrollment & EMP IDs",
      portal_admin_feat_3: "Operational Scope & Department Routing",
      btn_enter_admin: "Enter Admin Portal",
      
      portal_worker_badge: "Mobile Android App",
      portal_worker_title: "Worker Login",
      portal_worker_desc: "Frontline worker authentication inside simulated Android mobile client. Select your organization, activate your pass with first-time password set, and enter AR training modules.",
      portal_worker_feat_1: "Realistic Mobile Device Mockup Frame",
      portal_worker_feat_2: "First-Time Setup & Persistent Login Session",
      portal_worker_feat_3: "1-Click Demo Worker Quick Access",
      btn_enter_worker: "Open Worker Mobile App",
      
      // Admin Portal
      admin_hero_badge: "Enterprise Workforce Management • DGMS Compliance Network",
      admin_hero_title_p1: "Industrial Facility &",
      admin_hero_title_p2: "Workforce Management",
      admin_hero_desc: "Register industrial mining, steel, and mica facilities, configure active operational departments, enroll workers, and distribute automated EMP credentials for mobile AR training.",
      btn_register_site: "Register Industrial Facility",
      btn_enroll_worker: "Add New Worker",
      btn_open_worker_client: "Launch Worker App (Phone)",
      
      stat_registered_orgs: "Registered Facilities",
      stat_active_depts: "Active Depts Covered",
      stat_enrolled_workers: "Enrolled Workers",
      
      tab_facilities: "Enrolled Facilities",
      tab_workers: "Workforce Directory",
      
      sec_facilities_kicker: "Central Industry Registry",
      sec_facilities_title: "Enrolled Industrial Facilities",
      sec_facilities_subtitle: "All units verified with unique KawachAR organization identifiers (KAW-XXXXX)",
      search_facilities_ph: "Search by name, ID, city, or license...",
      btn_register_new_site: "Register New Facility",
      empty_facilities_title: "No matching industrial registrations found",
      empty_facilities_desc: "Click \"Register New Facility\" to onboard your first unit.",
      
      th_org_id: "Org ID",
      th_facility_name: "Facility & Site",
      th_industry_type: "Industry Type",
      th_reg_doc: "Registration Document",
      th_active_depts: "Active Departments",
      th_safety_officer: "Admin / Safety Officer",
      th_actions: "Actions",
      
      sec_workers_kicker: "Enterprise Workforce Registry",
      sec_workers_title: "Enrolled Workers & Credentials",
      sec_workers_subtitle: "Workers assigned sequential EMP-XXXX usernames and department access scopes",
      search_workers_ph: "Search worker by name, EMP ID, mobile...",
      btn_add_worker: "Add New Worker",
      empty_workers_title: "No workers enrolled yet",
      empty_workers_desc: "Admin can enroll workers to generate their EMP IDs and credentials.",
      
      th_worker_id: "Worker ID",
      th_worker_name: "Full Name",
      th_worker_facility: "Assigned Facility",
      th_worker_mobile: "Mobile Number",
      th_worker_aadhaar: "Aadhaar (Demo)",
      th_worker_depts: "Assigned Departments",
      th_worker_status: "Account Status",
      
      // Worker Mobile App
      worker_workspace_badge: "Android Mobile Client Simulation • Centered Device Viewport",
      btn_reset_flow: "Reset Flow",
      phone_header_sub: "Worker Safety Client",
      
      worker_login_title: "Worker Login",
      worker_login_sub: "Select your organization and authenticate with your assigned Worker ID.",
      demo_worker_title: "Live Demo Quick Access",
      demo_worker_desc: "Auto-fill sample worker credentials and log in directly:",
      btn_use_demo_worker: "Use Demo Worker (Ramesh - EMP-0001)",
      login_or_divider: "or enter credentials",
      
      lbl_select_org: "Select Organization / Facility",
      opt_choose_facility: "Choose your facility...",
      err_select_org: "Please select your organization.",
      lbl_worker_id: "Worker ID (Username)",
      err_worker_id: "Please enter your Worker ID.",
      
      first_time_title: "First-Time Login Setup",
      first_time_sub: "This worker ID is not yet activated. Set your password below to complete setup:",
      lbl_password: "Password",
      ph_password: "Enter password (min. 6 characters)",
      err_password: "Password must be at least 6 characters.",
      lbl_confirm_password: "Confirm Password",
      ph_confirm_password: "Re-enter your password",
      err_pwd_mismatch: "Passwords must match.",
      btn_login_worker: "Log In to KawachAR",
      btn_set_pwd_login: "Set Password & Log In",
      help_no_id: "Don't have your Worker ID?",
      help_contact_admin: "Worker accounts are registered by your Plant Safety Officer in the Admin Portal.",
      
      // Training Modules
      geo_fence_active: "DGMS AR Geo-Fence Active",
      geo_fence_sub: "Zero-hardware mobile AR camera ready",
      status_online: "Online",
      status_offline: "Offline",
      status_syncing: "Syncing...",
      status_synced: "Synced ✓",
      badge_offline_pending: "Saved locally, pending sync",
      badge_synced_cloud: "Synced to DGMS Cloud",
      offline_notice_text: "Saved locally, pending sync to DGMS Cloud.",
      offline_toast_title: "Offline Mode Active",
      offline_toast_desc: "Zero network mode: Assessments will save locally.",
      toast_syncing_records: "Syncing offline training records to DGMS Cloud...",
      toast_synced_success: "Synced! Records & certificates updated in Admin Dashboard.",
      modules_heading: "Training Modules",
      modules_subheading: "Interactive smartphone AR hazard simulations and DGMS safety compliance courses.",
      phase3_kicker: "Phase 3 Preview",
      phase3_title: "AR Camera Simulator Active",
      phase3_desc: "Interactive 3D hazard models, poisonous gas projection, and machine danger zones are simulated on this device.",
      
      mod1_tag: "Module 01 • Atmospheric Safety",
      mod1_title: "Toxic Gas Telemetry & CH₄/CO Alert Cloud",
      mod1_desc: "Simulated AR gas dispersion mapping in enclosed mine shafts and smelting tunnels.",
      mod2_tag: "Module 02 • High Voltage",
      mod2_title: "Substation High-Tension Arc Perimeter",
      mod2_desc: "AR line projection for flashover safety distances and live electrical panels.",
      mod3_tag: "Module 03 • Heavy Machinery",
      mod3_title: "HEMM Haul-Truck Blind-Spot Detection",
      mod3_desc: "360-degree operator blind-zone visualization using phone camera overlays.",
      badge_ar_ready: "AR Ready",
      btn_logout: "Log Out of Session",
      badge_active_module: "Active • 4 Tasks",
      mod_fire_tag: "Module 01 • Emergency Hazard",
      mod_fire_title: "Fire & Explosion Response",
      mod_fire_desc: "Identify emergency escape routes in AR, select correct extinguisher classes for electrical fires, and sequence evacuation protocols.",
      mod_gas_tag: "Module 02 • Toxic Atmosphere",
      mod_gas_title: "Gas Leak & Confined Space Protocol",
      mod_gas_desc: "Recognize hazardous perimeter zones via AR reticles, select mandatory SCBA respiratory PPE, and master the buddy-system protocol.",
      
      // Module 1: Fire & Explosion Tasks (4 Tasks)
      fe_t1_step: "Task 1 of 4: Exit Identification",
      fe_t1_badge: "AR HAZARD IDENTIFICATION",
      fe_t1_title: "Emergency Exit Identification",
      fe_t1_scenario: "Smoke is rapidly filling Sector C-4. Scan your camera surroundings in AR and locate the safest verified escape hatch marker.",
      fe_t1_marker_label: "Escape Route B-2",
      fe_t1_marker_tel: "Verified DGMS Escape Route • Thermal: 24°C Normal • Smoke Clearance: 100%",
      fe_t1_opt_a: "Hatch A-1 (Thermal sensors show extreme heat & dense smoke)",
      fe_t1_opt_b: "Hatch B-2 (Verified clear route with positive-pressure ventilation beacon)",
      fe_t1_opt_c: "Cargo Elevator 4 (Power failure warning & shaft blocked)",
      fe_t1_correct_fb: "Correct! Primary Escape Hatch B-2 is clear of toxic fumes with active fresh-air ventilation.",
      fe_t1_incorrect_fb: "Unsafe! That route has dense toxic smoke or power failure. Follow the verified green DGMS beacon.",

      fe_t2_step: "Task 2 of 4: Extinguisher Selection",
      fe_t2_badge: "EQUIPMENT & SUPPRESSION",
      fe_t2_title: "Electrical Switchgear Fire Suppression",
      fe_t2_scenario: "A 415V underground electrical distribution panel is arcing in flames. Select the correct extinguishing agent in AR.",
      fe_t2_marker_label: "415V Switchgear Fire",
      fe_t2_marker_tel: "Live Voltage: 415V Arc • Class C Electrical Fire • Temp: 420°C",
      fe_t2_opt_a: "Class A: Pressurized Water Jet Stream",
      fe_t2_opt_b: "Class C / CO2 Carbon Dioxide Non-Conductive Extinguisher",
      fe_t2_opt_c: "AFFF Aqueous Foam Blanket Dispenser",
      fe_t2_correct_fb: "Correct! Non-conductive CO2 gas smothers 415V electrical flames safely without electrocution hazard.",
      fe_t2_incorrect_fb: "Lethal Danger! Water and liquid foam conduct 415V electric current, causing fatal shock to the operator.",

      fe_t3_step: "Task 3 of 4: Damper Isolation",
      fe_t3_badge: "SMOKE CONTAINMENT PROTOCOL",
      fe_t3_title: "Ventilation Damper Flow Control",
      fe_t3_scenario: "Fire suppressed at switchgear, but toxic carbon monoxide is drifting toward active shafts. Identify the correct ventilation damper action.",
      fe_t3_marker_label: "Ventilation Damper C-4",
      fe_t3_marker_tel: "CO Gas Flow: 180 PPM • Return Airway Bypass Valve",
      fe_t3_opt_a: "Open all intake blast doors directly into adjacent manned shafts",
      fe_t3_opt_b: "Activate Emergency Ventilation Bypass to divert smoke directly into Return Exhaust Shaft",
      fe_t3_opt_c: "Shut down all surface fans completely without adjusting isolation dampers",
      fe_t3_correct_fb: "Correct! Emergency bypass dampers divert deadly CO gases straight into the return exhaust airway away from workers.",
      fe_t3_incorrect_fb: "Unsafe Action! Opening blast doors or shutting main ventilation traps toxic CO gas inside occupied underground drifts.",

      fe_t4_step: "Task 4 of 4: Evacuation & DGMS Protocol",
      fe_t4_badge: "DGMS EVACUATION PROTOCOL",
      fe_t4_title: "Emergency Isolation & Surface Muster Drill",
      fe_t4_scenario: "Final evacuation required from Sector C-4. Select the mandatory DGMS sequence to secure the site and verify personnel.",
      fe_t4_marker_label: "Power LOTO Panel",
      fe_t4_marker_tel: "Sector Breaker Lockout • Surface Muster Egress Active",
      fe_t4_opt_a: "Evacuate solo immediately leaving sector circuits energized to maintain illumination",
      fe_t4_opt_b: "Trip Main Emergency Isolation Breaker (LOTO), verify team headcount, and proceed via intake airway to Surface Muster Point",
      fe_t4_opt_c: "Re-enter sector solo to retrieve personal gear before fire sirens stop",
      fe_t4_correct_fb: "Outstanding! Electrical LOTO isolation, buddy team headcount, and surface muster reporting fulfill 100% DGMS compliance.",
      fe_t4_incorrect_fb: "Critical Violation! DGMS mandates power LOTO, zero unauthorized re-entry, and synchronized buddy headcount muster.",

      // Module 2: Gas Leak & Confined Space Tasks (4 Tasks)
      gl_t1_step: "Task 1 of 4: Gas Zone Mapping",
      gl_t1_badge: "AR TOXIC MAPPING",
      gl_t1_title: "Toxic Perimeter Identification",
      gl_t1_scenario: "H2S gas sensor triggered at 35 PPM in Drift 3. Scan the camera view and locate the safe fresh-air intake boundary in AR.",
      gl_t1_marker_label: "Toxic H₂S Gas (Drift 3)",
      gl_t1_marker_tel: "H₂S: 35 PPM (Lethal Limit: 10 PPM) • O₂: 18.2% Deficient",
      gl_t1_opt_a: "Drift 3 Low Sump Pocket (35 PPM H2S - Heavy lethal accumulation zone)",
      gl_t1_opt_b: "Intake Airway Upwind Staging Post (0 PPM H2S - Clean positive air intake)",
      gl_t1_opt_c: "Return Airway Exhaust Duct (22 PPM H2S / 1.5% CH4 - Contaminated exhaust stream)",
      gl_t1_correct_fb: "Correct! Upwind intake airway provides uncontaminated fresh positive-pressure air with 0 PPM toxic gas.",
      gl_t1_incorrect_fb: "Lethal Zone! Low pockets and return ducts contain toxic concentrations of H2S exceeding permissible exposure limits.",

      gl_t2_step: "Task 2 of 4: PPE Selection",
      gl_t2_badge: "RESPIRATORY PPE COMPLIANCE",
      gl_t2_title: "Atmospheric Life-Support Apparatus",
      gl_t2_scenario: "Atmospheric oxygen is measured at 18.1% with toxic H2S fumes present. Select the mandatory respiratory gear in AR.",
      gl_t2_marker_label: "Oxygen-Deficient Zone",
      gl_t2_marker_tel: "O₂ Level: 18.1% (Critically Low) • Mandatory SCBA Zone",
      gl_t2_opt_a: "N95 Particulate Dust Mask (Filters dust only, zero oxygen or gas protection)",
      gl_t2_opt_b: "Positive-Pressure Self-Contained Breathing Apparatus (SCBA, 300 Bar)",
      gl_t2_opt_c: "Half-Face Organic Vapor Cartridge (Not rated for oxygen-deficient atmospheres <19.5%)",
      gl_t2_correct_fb: "Correct! In oxygen-deficient (<19.5%) and toxic environments, DGMS mandates positive-pressure SCBA life-support.",
      gl_t2_incorrect_fb: "Fatal Error! Dust masks and simple cartridges do not supply oxygen and will cause immediate blackout and asphyxiation.",

      gl_t3_step: "Task 3 of 4: Atmospheric Testing",
      gl_t3_badge: "CONFINED SPACE GAS AUDIT",
      gl_t3_title: "Multi-Level Stratified Gas Sampling",
      gl_t3_scenario: "Preparing for sump pit entry. Gases stratify by molecular weight. Identify the mandatory calibrated multi-level sampling sequence.",
      gl_t3_marker_label: "Confined Sump Entry",
      gl_t3_marker_tel: "Depth: 4.5m • Top (CH₄) / Mid (CO) / Bottom (H₂S/O₂)",
      gl_t3_opt_a: "Sample only top surface air with a single-gas combustible detector",
      gl_t3_opt_b: "Calibrated 4-Gas Probe Sampling at 3 Levels: Top (CH4), Middle (CO/VOC), and Bottom (H2S/O2) with continuous telemetry",
      gl_t3_opt_c: "Perform a fast sensory smell check at hatch rim before entering with an uncalibrated meter",
      gl_t3_correct_fb: "Correct! Stratified sampling at Top (light methane), Middle (carbon monoxide), and Bottom (heavy hydrogen sulfide) is mandatory before entry.",
      gl_t3_incorrect_fb: "Dangerous! H2S paralyzes olfactory nerves instantly causing sensory failure. Single-level testing misses heavy stratified gases.",

      gl_t4_step: "Task 4 of 4: Standby Sentry Protocol",
      gl_t4_badge: "CONFINED SPACE RESCUE RIG",
      gl_t4_title: "Lifeline Tripod Winch & Dedicated Sentry",
      gl_t4_scenario: "Authorized entry into sump vessel begins. Confirm the mandatory DGMS mechanical rescue and top standby sentry procedure.",
      gl_t4_marker_label: "Retrieval Winch & Sentry",
      gl_t4_marker_tel: "Mechanical Winch Locked • Certified Outside Sentry",
      gl_t4_opt_a: "Solo worker entry with walkie-talkie and loose rope tied around waist",
      gl_t4_opt_b: "Full-body harness connected to retrieval tripod mechanical winch with a dedicated, trained external standby sentry",
      gl_t4_opt_c: "Two workers enter tank together with no external sentry stationed at the top hatch",
      gl_t4_correct_fb: "Perfect! Full harness, mechanical tripod rescue winch, and continuous dedicated external sentry ensure rapid zero-entry emergency rescue.",
      gl_t4_incorrect_fb: "Fatal Regulatory Violation! DGMS strictly prohibits confined space entry without an external sentry and certified mechanical retrieval winch.",

      // Retake Screen & Status
      tag_retake_required: "Retake Required",
      failed_result_title: "Competency Standard Not Met",
      failed_result_sub: "75% passing threshold required for DGMS certification passport.",
      lbl_correct_answers: "Correct Responses:",
      lbl_pass_threshold: "Pass Threshold:",
      lbl_audit_status: "Audit Status:",
      badge_status_retake: "Retake Required • Logged to Admin",
      failed_remediation_note: "Review critical safety hazard indicators, verify ventilation escape routes and emergency protocols, then retake the module.",
      btn_retake_module: "Retake Training Module",
      th_worker_training_status: "AR Safety Status",
      status_not_attempted: "Not Attempted",
      status_certified: "Certified",
      status_retake: "Retake",
      txt_tasks_count: "{correct} of 4 Tasks",
      
      // Facility Registration Modal (POINT 3)
      modal_reg_kicker: "Admin Portal • Industrial Onboarding",
      modal_reg_title: "Facility Registration Flow",
      lbl_next_id: "Next ID:",
      reg_tip_content: "KawachAR connects registered facilities directly to workers' smartphone cameras for zero-hardware hazard overlays, gas telemetry, and DGMS compliance tracking.",
      err_correct_fields: "Please correct the highlighted fields:",
      err_correct_fields_sub: "Ensure all required fields and at least one active department are selected.",
      sec1_title: "Organization & Facility Profile",
      sec1_desc: "Enter legal entity, industry classification, and location details",
      lbl_org_name: "Organization / Factory Name",
      ph_org_name: "e.g. Bharat Mining & Minerals Corp. Unit #4",
      err_org_name: "Organization / Factory Name is required.",
      lbl_industry_type: "Industry Type",
      opt_select_industry: "Select Industry Classification...",
      ind_mining: "Mining (Open-cast / Underground)",
      ind_steel: "Steel (Smelting / Rolling / Alloys)",
      ind_mfg: "Manufacturing (Heavy / Equipment)",
      ind_mica: "Mica (Mining / Splitting / Processing)",
      err_industry_type: "Please select an Industry Type.",
      lbl_facility_location: "Facility Location / Site Address",
      ph_location: "e.g. Dhanbad Mining Zone, Jharkhand",
      err_location: "Facility Location is required.",
      
      lbl_reg_type: "Registration Document Type",
      reg_choice_licence_title: "Registration / Licence Number",
      reg_choice_licence_sub: "Factory Licence, Mining Lease or DGMS Number",
      reg_choice_udyam_title: "Udyam Registration Number",
      reg_choice_udyam_sub: "Official MSME Enterprise Registration",
      lbl_reg_doc_licence: "Official Registration / Licence Number",
      ph_reg_licence: "e.g. DGMS/MIN/2024/8892 or any 10-digit number",
      hint_reg_licence: "Accepts valid alphanumeric licence format or any 10-digit number for demo",
      lbl_reg_doc_udyam: "Udyam Registration Number (MSME)",
      ph_reg_udyam: "e.g. UDYAM-JH-02-0049281 or any 10-digit number",
      hint_reg_udyam: "Accepts official UDYAM-XX-XX format or any 10-digit number for demo",
      err_reg_doc_value: "Please enter a valid registration or 10-digit number.",
      
      sec2_title: "Active Operational Departments (Site Scope)",
      dept_of_selected: "of 15 selected",
      sec2_desc: "Select all operational departments active at this specific facility to initialize smartphone AR safety models.",
      lbl_custom_dept: "Custom Department Name",
      err_select_dept: "Please select at least one Active Department.",
      sec3_title: "Designated Safety Officer / Plant Admin",
      sec3_desc: "Point of contact for emergency AR telemetry alerts and DGMS audit reports",
      lbl_officer_name: "Officer / Admin Name",
      err_officer_name: "Admin / Safety Officer Name is required.",
      lbl_contact_number: "Contact Number",
      err_contact_number: "Valid contact number is required.",
      lbl_official_email: "Official Email Address",
      err_official_email: "Valid official email is required.",
      modal_footer_note: "All submissions generate an authorized cryptographic KAW identifier",
      btn_cancel: "Cancel",
      btn_register_gen_id: "Register & Generate KAW-ID",
      
      // Add Worker Modal (POINT 4)
      modal_add_worker_kicker: "Workforce Onboarding • Admin Control",
      modal_add_worker_title: "Enroll Frontline Worker",
      lbl_next_worker_id: "Next Worker ID:",
      add_worker_tip: "The generated Worker ID (EMP-XXXX) serves as the worker's permanent login username. The worker will set their own password during their first-time mobile login.",
      lbl_assigned_facility: "Assigned Industrial Facility",
      opt_select_facility_scope: "Select facility to load active departments...",
      err_select_facility: "Please select the assigned industrial facility.",
      lbl_full_name: "Worker Full Name",
      ph_worker_name: "e.g. Ramesh Kumar Soren",
      err_worker_name: "Worker Full Name is required.",
      lbl_mobile_number: "Mobile Number",
      err_mobile_number: "Valid 10-digit mobile number is required.",
      lbl_residential_address: "Residential Address / Colony Location",
      ph_worker_address: "e.g. Quarter B-42, Mining Officers Colony, Dhanbad, Jharkhand",
      err_address: "Address / Location is required.",
      lbl_aadhaar_demo: "Aadhaar Number",
      pill_demo_field: "Masked Demo Field",
      hint_aadhaar_demo: "Placeholder identification format (demo only, no real verification)",
      lbl_assigned_depts: "Assigned Operational Department(s)",
      hint_select_facility_first: "Select a facility above to load that organization's active operational departments.",
      err_select_worker_dept: "Please select at least one assigned department.",
      btn_enroll_generate_emp: "Enroll Worker & Generate EMP-ID",
      
      // Slips & Summaries
      worker_enrolled_title: "Worker Successfully Enrolled!",
      worker_enrolled_subtitle: "Share these credentials with the worker for their first mobile app login.",
      lbl_worker_username: "Worker Login Username",
      btn_copy: "Copy",
      note_worker_first_login: "The worker will set their secret password upon first login in the mobile app.",
      summary_worker_name: "Worker Name",
      summary_facility: "Facility",
      summary_mobile: "Mobile",
      summary_assigned_depts: "Assigned Departments",
      btn_done: "Done",
      
      facility_registered_title: "Facility Registered!",
      facility_registered_subtitle: "Your industrial facility is enrolled in the KawachAR Safety Network.",
      lbl_org_id: "Auto-Generated Organization ID",
      summary_industry: "Industry Type",
      summary_location: "Location",
      summary_document: "Registration Document",
      summary_active_depts: "Active Departments",
      summary_admin: "Safety Officer / Admin",
      
      // Shared Demo Dataset (Req 3 & 4)
      demo_org_name: "Bharat Mining & Minerals Corp. Unit #4",
      demo_org_location: "Dhanbad Mining Zone, Jharkhand",
      demo_admin_name: "Er. Rajeshwar Verma",
      demo_worker_name: "Ramesh Kumar Soren",
      demo_worker_address: "Quarter B-42, Mining Officers Colony, Dhanbad, Jharkhand",
      toast_demo_facility_filled: "Demo industrial facility details auto-filled.",
      toast_demo_worker_filled: "Demo worker details auto-filled.",
      toast_demo_login_filled: "Demo login credentials auto-filled.",

      // AR and Certificate Audit
      tab_verify_cert: "Verify Certificate & Audit",
      sec_verify_kicker: "DGMS Compliance Audit Engine",
      sec_verify_title: "QR Certificate Verification & Registry",
      sec_verify_subtitle: "Lookup cryptographically signed worker safety certificates, verify authenticity, and review compliance audit logs.",
      verify_box_title: "Verify Safety Certificate Authenticity",
      verify_box_desc: "Enter the Certificate ID encoded in the worker's QR badge (Format: KAW-CERT-XXXXX)",
      ph_cert_lookup: "e.g. KAW-CERT-84921",
      btn_verify_cert: "Verify Certificate",
      lbl_recent_certs: "Recent / Sample Passes:",
      hint_no_issued_certs: "Complete training modules in worker app to generate certificates",
      title_issued_registry: "Issued Workforce Certifications (Audit Log)",
      th_cert_id: "Certificate ID",
      th_worker_name: "Worker Name",
      th_worker_facility: "Assigned Facility",
      th_module_completed: "Module Completed",
      th_cert_score: "Score & Status",
      th_issued_at: "Date Issued",
      th_cert_actions: "Actions",
      btn_start_module: "Start AR Module",
      btn_confirm_choice: "Confirm Selection",
      btn_all_modules: "All Modules",
      cert_verified_tag: "DGMS Verified",
      cert_doc_title: "Digital Safety Competency Passport",
      lbl_certified_module: "Certified Module:",
      lbl_final_score: "Final Score",
      cert_passed_status: "Passed • Compliant",
      cert_digitally_signed: "Digitally Signed & Sealed",
      btn_return_modules: "Return to Training Modules",
      btn_verify_in_admin: "Verify in Admin Portal",
      ar_scan_init: "Initializing AR Engine...",
      lbl_sim_feed: "Simulated AR Camera Feed",
      btn_view_cert: "View Cert",
      btn_view_slip: "View Slip",
      btn_verify: "Verify",
      admin_cert_modal_kicker: "DGMS COMPLIANCE VERIFIED",
      admin_cert_modal_title: "Worker Safety Certificate",
      admin_cert_modal_subtitle: "Verified DGMS Digital Competency Credential",
      btn_view_in_audit: "Verify in Audit Engine",

      // Missing Table Headers & Cert Details
      th_score_pct: "Score %",
      th_issue_date: "Issue Date & Time",
      th_verification_status: "Verification Status",
      empty_certs_title: "No safety certificates recorded yet",
      empty_certs_desc: "Complete training modules in the Worker App to generate DGMS-verified certificates.",
      badge_coming_soon: "Coming in Next Release",
      mod_machinery_tag: "Module 03 • Heavy Equipment",
      mod_machinery_title: "HEMM Haul-Truck Blind-Spot Detection",
      mod_machinery_desc: "360-degree operator blind-zone visualization using phone camera overlays.",
      lbl_disabled_mod: "Preview Module (Locked)",
      mod_electrical_tag: "Module 04 • Electrical Safety",
      mod_electrical_title: "High-Voltage Substation Arc Flash Safety",
      mod_electrical_desc: "Live 33kV switchyard clearance perimeter guidelines.",
      mod_ppe_tag: "Module 05 • PPE & Fall Protection",
      mod_ppe_title: "Working at Height & Rigging Harness",
      mod_ppe_desc: "Fall arrest system anchoring and harness inspection.",
      lbl_cert_id: "CERTIFICATE ID:",
      lbl_crypto_hash: "CRYPTOGRAPHIC HASH:",
      lbl_dgms_valid: "DGMS Valid & Active",
      lbl_dgms_standard: "Directorate General of Mines Safety (DGMS) Standard",
      lbl_worker_auth: "Worker Authentication",
      lbl_emp_format: "Format: EMP-XXXX",
      duration_15_mins: "15 mins",
      duration_10_mins: "10 mins",
      failed_pass_threshold_note: "75% (3/4 Tasks)",
      err_custom_dept_name: "Please specify the custom department name.",
      err_admin_worker_fields: "Please complete all required fields.",
      phone_sub_modules: "DGMS Safety AR Shield",
      phone_sub_ar: "AR Live Telemetry",
      phone_sub_cert: "Digital Safety Passport",
      phone_sub_failed: "Competency Assessment",

      // Department Names & Subtitles
      dept_mining_name: "Mining / Extraction Operations",
      dept_mining_sub: "Pit, quarry & ore extraction",
      dept_prod_name: "Production / Manufacturing",
      dept_prod_sub: "Assembly & fabrication lines",
      dept_proc_name: "Processing / Material Handling",
      dept_proc_sub: "Crushing, sorting & conveyor bays",
      dept_mech_name: "Mechanical",
      dept_mech_sub: "Heavy plant machinery & hydraulics",
      dept_elec_name: "Electrical",
      dept_elec_sub: "Substations, HT gear & power lines",
      dept_maint_name: "Maintenance",
      dept_maint_sub: "Preventive & corrective overhaul",
      dept_plant_name: "Plant / Equipment Operations",
      dept_plant_sub: "Boilers, furnaces & rotary units",
      dept_safety_name: "Safety / HSE",
      dept_safety_sub: "DGMS, compliance & hazard command",
      dept_qa_name: "Quality Control / QA",
      dept_qa_sub: "Lab assay, testing & QA release",
      dept_util_name: "Utilities / Power & Energy",
      dept_util_sub: "Water treatment, gas & power grid",
      dept_store_name: "Warehouse / Stores",
      dept_store_sub: "Raw inventory & spares storage",
      dept_log_name: "Logistics / Transportation",
      dept_log_sub: "Fleet, haulage & dispatch logistics",
      dept_eng_name: "Engineering / Projects",
      dept_eng_sub: "Civil, site design & expansion",
      dept_hr_name: "Administration / HR",
      dept_hr_sub: "Workforce ops & plant management",
      dept_other_name: "Other",
      dept_other_sub: "Specify custom department"
    },

    hi: {
      brand_tagline: "औद्योगिक सुरक्षा एवं एआर टेलीमेट्री सुरक्षा कवच",
      nav_landing_view: "स्वागत पोर्टल",
      nav_admin_view: "एडमिन डैशबोर्ड",
      nav_worker_view: "कर्मचारी मोबाइल ऐप",
      nav_home: "होम",
      nav_admin_portal: "एडमिन पोर्टल",
      nav_admin_sub: "इकाई और कर्मचारी",
      nav_worker_app: "कर्मचारी लॉगिन",
      nav_worker_sub: "एंड्रॉयड एआर क्लाइंट",
      
      landing_badge: "आगामी पीढ़ी का औद्योगिक कार्यबल सुरक्षा मंच",
      landing_title_main: "औद्योगिक श्रमिकों के लिए एआर-संचालित सुरक्षा प्रशिक्षण",
      landing_title_p1: "शून्य-हार्डवेयर एआर सुरक्षा",
      landing_title_p2: "औद्योगिक श्रमिकों के लिए",
      landing_mission_desc: "कवच-एआर पारंपरिक प्रशिक्षण की कम प्रभावशीलता को दूर कर स्मार्टफोन एआर द्वारा वास्तविक खतरे के सिमुलेशन प्रदान करता है। यह महंगे वीआर हेडसेट के अवरोध को हटाकर झारखंड के खनन, इस्पात और अभ्रक (माइका) श्रमिकों को डिजिटल सुरक्षा प्रमाणन प्रदान करता है।",
      mission_tag_1: "उच्च प्रशिक्षण अवधारण",
      mission_tag_2: "शून्य-लागत स्मार्टफोन एआर",
      mission_tag_3: "सत्यापनीय डीजीएमएस पासपोर्ट",
      btn_fill_demo: "डेमो विवरण स्वतः भरें",
      hero_img_tag: "लाइव एआर खतरा टेलीमेट्री • झारखंड खनन एवं इस्पात",
      
      lang_select_title: "अपनी पसंदीदा भाषा चुनें",
      lang_select_sub: "अपनी मूल भाषा चुनें। बदलाव तुरंत सभी स्क्रीन और फॉर्म पर लागू होंगे।",
      lang_ai_badge: "एआई अनुवाद (प्रारंभिक संस्करण)",
      
      entry_portals_title: "आगे बढ़ने के लिए पोर्टल चुनें",
      entry_portals_sub: "प्लांट प्रबंधन (एडमिन) या फ्रंटलाइन वर्कर मोबाइल अनुभव में से चुनें।",
      portal_admin_badge: "वेब डैशबोर्ड",
      portal_admin_title: "एडमिन पोर्टल",
      portal_admin_desc: "औद्योगिक इकाइयों का पंजीकरण करें, सक्रिय विभाग प्रबंधित करें, श्रमिकों का नामांकन करें, EMP आईडी जारी करें और डीजीएमएस अनुपालन की निगरानी करें।",
      portal_admin_feat_1: "उद्योग एवं एमएसएमई उद्यम पंजीकरण",
      portal_admin_feat_2: "श्रमिक नामांकन एवं EMP आईडी निर्माण",
      portal_admin_feat_3: "विभागीय सुरक्षा मॉडल आवंटन",
      btn_enter_admin: "एडमिन पोर्टल में प्रवेश करें",
      
      portal_worker_badge: "मोबाइल एंड्रॉयड ऐप",
      portal_worker_title: "कर्मचारी लॉगिन",
      portal_worker_desc: "सिम्युलेटेड एंड्रॉयड मोबाइल पर श्रमिक प्रमाणीकरण। अपनी कंपनी चुनें, पहली बार पासवर्ड सेट कर पास सक्रिय करें और एआर प्रशिक्षण में प्रवेश करें।",
      portal_worker_feat_1: "यथार्थवादी मोबाइल फोन मॉकअप फ्रेम",
      portal_worker_feat_2: "प्रथम लॉगिन सेटअप एवं स्थायी सत्र",
      portal_worker_feat_3: "1-क्लिक डेमो कर्मचारी त्वरित प्रवेश",
      btn_enter_worker: "कर्मचारी ऐप खोलें",
      
      admin_hero_badge: "उद्यम कार्यबल प्रबंधन • डीजीएमएस अनुपालन नेटवर्क",
      admin_hero_title_p1: "औद्योगिक इकाई एवं",
      admin_hero_title_p2: "कार्यबल प्रबंधन",
      admin_hero_desc: "खनन, इस्पात और माइका संयंत्रों का पंजीकरण करें, परिचालन विभागों को सक्रिय करें और मोबाइल एआर प्रशिक्षण के लिए स्वचालित EMP क्रेडेंशियल जारी करें।",
      btn_register_site: "औद्योगिक इकाई पंजीकृत करें",
      btn_enroll_worker: "नया कर्मचारी जोड़ें",
      btn_open_worker_client: "कर्मचारी ऐप लॉन्च करें (फोन)",
      
      stat_registered_orgs: "पंजीकृत औद्योगिक इकाइयां",
      stat_active_depts: "सक्रिय परिचालन विभाग",
      stat_enrolled_workers: "नामित कर्मचारी",
      
      tab_facilities: "पंजीकृत इकाइयां",
      tab_workers: "कार्यबल निर्देशिका",
      
      sec_facilities_kicker: "केंद्रीय औद्योगिक रजिस्ट्री",
      sec_facilities_title: "पंजीकृत औद्योगिक इकाइयां",
      sec_facilities_subtitle: "सभी इकाइयां अद्वितीय KawachAR पहचानकर्ता (KAW-XXXXX) से सत्यापित हैं",
      search_facilities_ph: "नाम, आईडी, शहर या लाइसेंस द्वारा खोजें...",
      btn_register_new_site: "नई इकाई पंजीकृत करें",
      empty_facilities_title: "कोई मेल खाता पंजीकरण नहीं मिला",
      empty_facilities_desc: "अपनी पहली औद्योगिक इकाई को पंजीकृत करने के लिए बटन पर क्लिक करें।",
      
      th_org_id: "इकाई आईडी",
      th_facility_name: "कंपनी व स्थान",
      th_industry_type: "उद्योग प्रकार",
      th_reg_doc: "पंजीकरण दस्तावेज़",
      th_active_depts: "सक्रिय विभाग",
      th_safety_officer: "सुरक्षा अधिकारी / एडमिन",
      th_actions: "कार्रवाई",
      
      sec_workers_kicker: "उद्यम कार्यबल रजिस्ट्री",
      sec_workers_title: "नामित कर्मचारी एवं साख",
      sec_workers_subtitle: "श्रमिकों को अनुक्रमिक EMP-XXXX उपयोगकर्ता नाम और विभागीय दायरा सौंपा गया है",
      search_workers_ph: "कर्मचारी का नाम, EMP आईडी, मोबाइल खोजें...",
      btn_add_worker: "नया कर्मचारी जोड़ें",
      empty_workers_title: "अभी तक कोई कर्मचारी नामांकित नहीं है",
      empty_workers_desc: "एडमिन पोर्टल से कर्मचारी जोड़कर EMP आईडी बनाएं।",
      
      th_worker_id: "कर्मचारी आईडी",
      th_worker_name: "पूरा नाम",
      th_worker_facility: "संबंधित इकाई",
      th_worker_mobile: "मोबाइल नंबर",
      th_worker_aadhaar: "आधार (डेमो)",
      th_worker_depts: "आवंटित विभाग",
      th_worker_status: "खाता स्थिति",
      
      worker_workspace_badge: "एंड्रॉयड मोबाइल क्लाइंट सिमुलेशन • केंद्रित फोन व्यूपोर्ट",
      btn_reset_flow: "प्रवाह रीसेट करें",
      phone_header_sub: "श्रमिक सुरक्षा क्लाइंट",
      
      worker_login_title: "कर्मचारी लॉगिन",
      worker_login_sub: "अपनी कंपनी चुनें और अपनी कर्मचारी आईडी से लॉगिन करें।",
      demo_worker_title: "लाइव डेमो त्वरित पहुंच",
      demo_worker_desc: "नमूना कर्मचारी विवरण स्वतः भरें और सीधे लॉगिन करें:",
      btn_use_demo_worker: "डेमो वर्कर का उपयोग करें (रमेश - EMP-0001)",
      login_or_divider: "या विवरण दर्ज करें",
      
      lbl_select_org: "कंपनी / औद्योगिक इकाई चुनें",
      opt_choose_facility: "अपनी इकाई चुनें...",
      err_select_org: "कृपया अपनी कंपनी का चयन करें।",
      lbl_worker_id: "कर्मचारी आईडी (यूज़रनेम)",
      err_worker_id: "कृपया अपनी कर्मचारी आईडी दर्ज करें।",
      
      first_time_title: "प्रथम लॉगिन सेटअप",
      first_time_sub: "यह कर्मचारी आईडी अभी सक्रिय नहीं है। अपना पासवर्ड सेट करें:",
      lbl_password: "पासवर्ड",
      ph_password: "पासवर्ड दर्ज करें (न्यूनतम 6 अक्षर)",
      err_password: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
      lbl_confirm_password: "पासवर्ड की पुष्टि करें",
      ph_confirm_password: "अपना पासवर्ड पुनः दर्ज करें",
      err_pwd_mismatch: "पासवर्ड मेल नहीं खाते।",
      btn_login_worker: "कवच-एआर में लॉगिन करें",
      btn_set_pwd_login: "पासवर्ड सेट करें और लॉगिन करें",
      help_no_id: "कर्मचारी आईडी नहीं है?",
      help_contact_admin: "कर्मचारी खाते एडमिन पोर्टल में सुरक्षा अधिकारी द्वारा बनाए जाते हैं।",
      
      geo_fence_active: "डीजीएमएस एआर जियो-फेंस सक्रिय",
      geo_fence_sub: "शून्य-हार्डवेयर मोबाइल कैमरा तैयार",
      status_online: "ऑनलाइन",
      status_offline: "ऑफलाइन",
      status_syncing: "सिंक हो रहा है...",
      status_synced: "सिंक पूरा ✓",
      badge_offline_pending: "स्थानीय रूप से सहेजा गया, सिंक लंबित",
      badge_synced_cloud: "डीजीएमएस क्लाउड से सिंक हुआ",
      offline_notice_text: "स्थानीय रूप से सहेजा गया, डीजीएमएस क्लाउड पर सिंक लंबित।",
      offline_toast_title: "ऑफलाइन मोड सक्रिय",
      offline_toast_desc: "जीरो-नेटवर्क मोड: सभी प्रशिक्षण स्थानीय रूप से सहेजे जाएंगे।",
      toast_syncing_records: "ऑफलाइन प्रशिक्षण रिकॉर्ड डीजीएमएस क्लाउड पर सिंक हो रहे हैं...",
      toast_synced_success: "सिंक सफल! एडमिन डैशबोर्ड में रिकॉर्ड अपडेट किए गए।",
      modules_heading: "प्रशिक्षण मॉड्यूल",
      modules_subheading: "इंटरएक्टिव स्मार्टफोन एआर खतरा सिमुलेशन और डीजीएमएस अनुपालन पाठ्यक्रम।",
      phase3_kicker: "चरण 3 पूर्वावलोकन",
      phase3_title: "एआर कैमरा सिमुलेटर सक्रिय",
      phase3_desc: "इंटरैक्टिव 3डी खतरा मॉडल, विषैली गैस और मशीन डेंजर जोन इस फोन पर सक्रिय हैं।",
      
      mod1_tag: "मॉड्यूल 01 • वायुमंडलीय सुरक्षा",
      mod1_title: "विषाक्त गैस टेलीमेट्री और CH₄/CO अलर्ट",
      mod1_desc: "बंद खदानों और स्मेल्टिंग सुरंगों में गैस फैलाव का एआर सिमुलेशन।",
      mod2_tag: "मॉड्यूल 02 • उच्च वोल्टेज",
      mod2_title: "सबस्टेशन हाई-टेंशन आर्क परिधि",
      mod2_desc: "फ्लैशओवर सुरक्षा दूरी और विद्युत पैनलों के लिए एआर लाइन प्रोजेक्शन।",
      mod3_tag: "मॉड्यूल 03 • भारी मशीनरी",
      mod3_title: "HEMM हॉल-ट्रक ब्लाइंड-स्पॉट डिटेक्शन",
      mod3_desc: "फोन कैमरे द्वारा ऑपरेटर के ब्लाइंड ज़ोन का 360-डिग्री दृश्य।",
      badge_ar_ready: "एआर तैयार",
      btn_logout: "सत्र से लॉगआउट करें",
      badge_active_module: "सक्रिय • 4 कार्य",
      mod_fire_tag: "मॉड्यूल 01 • आपातकालीन खतरा",
      mod_fire_title: "अग्नि एवं विस्फोट सुरक्षा",
      mod_fire_desc: "एआर में आपातकालीन निकास मार्गों की पहचान करें, विद्युत आग के लिए सही अग्निशामक चुनें और निकासी प्रोटोकॉल पूरा करें।",
      mod_gas_tag: "मॉड्यूल 02 • विषाक्त वातावरण",
      mod_gas_title: "गैस रिसाव एवं सीमित स्थान सुरक्षा",
      mod_gas_desc: "एआर रेटिकल्स से खतरनाक परिधि क्षेत्रों की पहचान करें, अनिवार्य एससीबीए पीपीई चुनें और सुरक्षा संतरी प्रोटोकॉल में महारत हासिल करें।",
      
      // Module 1: Fire & Explosion Tasks (4 Tasks)
      fe_t1_step: "कार्य 1 / 4: निकास पहचान",
      fe_t1_badge: "एआर खतरा पहचान",
      fe_t1_title: "आपातकालीन निकास की पहचान",
      fe_t1_scenario: "सेक्टर C-4 में घना धुआं तेजी से भर रहा है। एआर में अपने परिवेश को स्कैन करें और सुरक्षित प्रमाणित एस्केप हैच मार्कर खोजें।",
      fe_t1_marker_label: "निकास मार्ग B-2",
      fe_t1_marker_tel: "प्रमाणित डीजीएमएस निकास मार्ग • तापमान: 24°C सामान्य • धुआं निकासी: 100%",
      fe_t1_opt_a: "हैच A-1 (थर्मल सेंसर अत्यधिक गर्मी और घना धुआं दर्शाते हैं)",
      fe_t1_opt_b: "हैच B-2 (धनात्मक वायुसंचार और स्पष्ट सुरक्षित मार्ग)",
      fe_t1_opt_c: "कार्गो लिफ्ट 4 (बिजली गुल और शाफ्ट अवरुद्ध)",
      fe_t1_correct_fb: "सही! प्राइमरी एस्केप हैच B-2 धुएं से मुक्त है और ताजा हवा संचारित हो रही है।",
      fe_t1_incorrect_fb: "असुरक्षित! उस मार्ग में घना जहरीला धुआं या बिजली विफलता है। हरे रंग के प्रमाणित डीजीएमएस बीकन का पालन करें।",

      fe_t2_step: "कार्य 2 / 4: अग्निशामक चयन",
      fe_t2_badge: "उपकरण एवं शमन",
      fe_t2_title: "इलेक्ट्रिकल स्विचगियर आग बुझाना",
      fe_t2_scenario: "एक 415V भूमिगत विद्युत वितरण पैनल में आग लग गई है। एआर में उपयुक्त अग्निशामक एजेंट चुनें।",
      fe_t2_marker_label: "415V स्विचगियर आग",
      fe_t2_marker_tel: "लाइव वोल्टेज: 415V आर्क • वर्ग C विद्युत आग • तापमान: 420°C",
      fe_t2_opt_a: "वर्ग A: दबावयुक्त जल धारा",
      fe_t2_opt_b: "वर्ग C / CO2 कार्बन डाइऑक्साइड गैर-चालक अग्निशामक",
      fe_t2_opt_c: "AFFF जलीय फोम डिस्पेंसर",
      fe_t2_correct_fb: "सही! गैर-चालक CO2 गैस करंट के खतरे के बिना 415V विद्युत आग को सुरक्षित रूप से बुझाती है।",
      fe_t2_incorrect_fb: "घातक खतरा! पानी और तरल झाग 415V करंट प्रवाहित करते हैं जिससे ऑपरेटर को घातक झटका लग सकता है।",

      fe_t3_step: "कार्य 3 / 4: वेंटिलेशन नियंत्रण",
      fe_t3_badge: "धुआं नियंत्रण प्रोटोकॉल",
      fe_t3_title: "वेंटिलेशन डैम्पर प्रवाह नियंत्रण",
      fe_t3_scenario: "स्विचगियर पर आग बुझ गई है, लेकिन जहरीला कार्बन मोनोऑक्साइड सक्रिय शाफ्ट की ओर बढ़ रहा है। सही वेंटिलेशन डैम्पर कार्रवाई चुनें।",
      fe_t3_marker_label: "वेंटिलेशन डैम्पर C-4",
      fe_t3_marker_tel: "CO गैस प्रवाह: 180 PPM • रिटर्न एयरवे बाईपास वाल्व",
      fe_t3_opt_a: "आसन्न कार्यरत शाफ्ट के सभी ब्लास्ट दरवाजे खोलें",
      fe_t3_opt_b: "धुएं को सीधे रिटर्न एग्जॉस्ट शाफ्ट में मोड़ने के लिए आपातकालीन वेंटिलेशन बाईपास सक्रिय करें",
      fe_t3_opt_c: "डैम्पर्स को समायोजित किए बिना सभी सतह पंखे बंद कर दें",
      fe_t3_correct_fb: "सही! आपातकालीन बाईपास डैम्पर्स श्रमिकों से दूर घातक CO गैसों को सीधे निकास शाफ्ट में मोड़ते हैं।",
      fe_t3_incorrect_fb: "असुरक्षित कार्रवाई! ब्लास्ट दरवाजे खोलने या मुख्य पंखे बंद करने से भूमिगत खदानों में जहरीली CO गैस फंस जाती है।",

      fe_t4_step: "कार्य 4 / 4: निकासी एवं डीजीएमएस प्रोटोकॉल",
      fe_t4_badge: "डीजीएमएस निकासी प्रोटोकॉल",
      fe_t4_title: "आपातकालीन आइसोलेशन और मस्टर पॉइंट अभ्यास",
      fe_t4_scenario: "सेक्टर C-4 से अंतिम निकासी आवश्यक है। खदान को सुरक्षित करने और कर्मियों के सत्यापन के लिए अनिवार्य डीजीएमएस क्रम चुनें।",
      fe_t4_marker_label: "LOTO पावर पैनल",
      fe_t4_marker_tel: "सेक्टर ब्रेकर लॉकआउट • सतह मस्टर निकास सक्रिय",
      fe_t4_opt_a: "रोशनी बनाए रखने के लिए सर्किट चालू छोड़कर तुरंत अकेले बाहर निकलें",
      fe_t4_opt_b: "मुख्य आपातकालीन आइसोलेशन ब्रेकर (LOTO) ट्रिप करें, टीम की गिनती सत्यापित करें, और सतह मस्टर पॉइंट पर जाएं",
      fe_t4_opt_c: "सायरन बंद होने से पहले व्यक्तिगत सामान लेने के लिए अकेले दोबारा प्रवेश करें",
      fe_t4_correct_fb: "उत्कृष्ट! इलेक्ट्रिकल LOTO अलगाव, टीम गणना और सतह मस्टर रिपोर्टिंग 100% डीजीएमएस मानकों को पूरा करती है।",
      fe_t4_incorrect_fb: "गंभीर उल्लंघन! डीजीएमएस पावर LOTO, शून्य अनधिकृत पुनः प्रवेश और टीम हेडकाउंट मस्टर को अनिवार्य करता है।",

      // Module 2: Gas Leak & Confined Space Tasks (4 Tasks)
      gl_t1_step: "कार्य 1 / 4: गैस क्षेत्र मैपिंग",
      gl_t1_badge: "एआर टॉक्सिक मैपिंग",
      gl_t1_title: "विषाक्त परिधि की पहचान",
      gl_t1_scenario: "ड्रिफ्ट 3 में H2S गैस सेंसर 35 PPM पर सक्रिय हुआ है। एआर में सुरक्षित ताजी हवा इनटेक सीमा का पता लगाएं।",
      gl_t1_marker_label: "विषाक्त H₂S गैस (ड्रिफ्ट 3)",
      gl_t1_marker_tel: "H₂S: 35 PPM (घातक सीमा: 10 PPM) • O₂: 18.2% कमी",
      gl_t1_opt_a: "ड्रिफ्ट 3 निचला नाला (35 PPM H2S - भारी घातक गैस जमाव क्षेत्र)",
      gl_t1_opt_b: "इनटेक एयरवे अपविंड स्टेजिंग पोस्ट (0 PPM H2S - स्वच्छ ताजी हवा)",
      gl_t1_opt_c: "रिटर्न एयरवे एग्जॉस्ट डक्ट (22 PPM H2S - दूषित निकास प्रवाह)",
      gl_t1_correct_fb: "सही! अपविंड इनटेक वायुमार्ग 0 PPM जहरीली गैस के साथ सुरक्षित स्वच्छ हवा प्रदान करता है।",
      gl_t1_incorrect_fb: "घातक क्षेत्र! निचले गड्डों और रिटर्न डक्ट में स्वीकार्य सीमा से अधिक जहरीली H2S गैस होती है।",

      gl_t2_step: "कार्य 2 / 4: पीपीई चयन",
      gl_t2_badge: "श्वसन पीपीई अनुपालन",
      gl_t2_title: "श्वसन जीवन-रक्षक उपकरण",
      gl_t2_scenario: "वातावरण में ऑक्सीजन 18.1% मापी गई है और जहरीली H2S गैस मौजूद है। एआर में अनिवार्य श्वसन उपकरण चुनें।",
      gl_t2_marker_label: "कम ऑक्सीजन क्षेत्र",
      gl_t2_marker_tel: "O₂ स्तर: 18.1% (अत्यधिक कम) • अनिवार्य SCBA क्षेत्र",
      gl_t2_opt_a: "N95 डस्ट मास्क (केवल धूल रोकता है, गैस या ऑक्सीजन सुरक्षा शून्य)",
      gl_t2_opt_b: "पॉजिटिव-प्रेशर सेल्फ-कंटेन्ड ब्रीदिंग उपकरण (SCBA, 300 Bar)",
      gl_t2_opt_c: "हाफ-फेस वेपर कार्ट्रिज (19.5% से कम ऑक्सीजन में अप्रमाणित)",
      gl_t2_correct_fb: "सही! ऑक्सीजन की कमी (<19.5%) और जहरीले वातावरण में केवल पॉजिटिव-प्रेशर SCBA की अनुमति है।",
      gl_t2_incorrect_fb: "घातक गलती! डस्ट मास्क और फिल्टर हवा में ऑक्सीजन नहीं देते, जिससे तुरंत दम घुटने से मृत्यु हो सकती है।",

      gl_t3_step: "कार्य 3 / 4: गैस स्तर परीक्षण",
      gl_t3_badge: "सीमित स्थान गैस परीक्षण",
      gl_t3_title: "बहु-स्तरीय स्तरीकृत गैस नमूनाकरण",
      gl_t3_scenario: "संप गड्ढे में प्रवेश की तैयारी। गैसें अपने आणविक भार के आधार पर स्तरों में विभाजित होती हैं। अनिवार्य बहु-स्तरीय परीक्षण विधि चुनें।",
      gl_t3_marker_label: "सीमित संप प्रवेश",
      gl_t3_marker_tel: "गहराई: 4.5m • शीर्ष (CH₄) / मध्य (CO) / तल (H₂S/O₂)",
      gl_t3_opt_a: "एकल-गैस डिटेक्टर से केवल सतह के ऊपरी भाग की हवा का परीक्षण करें",
      gl_t3_opt_b: "3 स्तरों पर कैलिब्रेटेड 4-गैस जांच: शीर्ष (CH4), मध्य (CO), और निचला (H2S/O2) निरंतर टेलीमेट्री के साथ",
      gl_t3_opt_c: "अकैलिब्रेटेड मीटर से प्रवेश करने से पहले ढक्कन पर गंध सूंघकर जांच करें",
      gl_t3_correct_fb: "सही! शीर्ष (मीथेन), मध्य (कार्बन मोनोऑक्साइड), और तल (हाइड्रोजन सल्फाइड) पर परीक्षण अनिवार्य है।",
      gl_t3_incorrect_fb: "खतरनाक! H2S सूंघने की क्षमता को तुरंत सुन्न कर देती है। केवल एक स्तर का परीक्षण भारी जहरीली गैसों को छोड़ देता है।",

      gl_t4_step: "कार्य 4 / 4: स्टैंडबाय संतरी प्रोटोकॉल",
      gl_t4_badge: "सीमित स्थान बचाव रिग",
      gl_t4_title: "लाइफलाइन ट्राइपॉड विंच और समर्पित संतरी",
      gl_t4_scenario: "संप टैंक में अधिकृत प्रवेश शुरू हो रहा है। अनिवार्य डीजीएमएस मैकेनिकल बचाव और बाहरी स्टैंडबाय संतरी प्रक्रिया की पुष्टि करें।",
      gl_t4_marker_label: "बचाव विंच एवं संतरी",
      gl_t4_marker_tel: "मैकेनिकल विंच लॉक • प्रमाणित बाहरी संतरी",
      gl_t4_opt_a: "कमर पर रस्सी बांधकर और वॉकी-टॉकी लेकर अकेले श्रमिक का प्रवेश",
      gl_t4_opt_b: "समर्पित प्रशिक्षित बाहरी संतरी के साथ ट्राइपॉड मैकेनिकल विंच से जुड़ा पूर्ण-शरीर हार्नेस",
      gl_t4_opt_c: "शीर्ष हैच पर बिना बाहरी संतरी के दो श्रमिक एक साथ टैंक में प्रवेश करें",
      gl_t4_correct_fb: "उत्कृष्ट! पूर्ण हार्नेस, मैकेनिकल ट्राइपॉड विंच और समर्पित बाहरी संतरी तुरंत सुरक्षित बचाव सुनिश्चित करते हैं।",
      gl_t4_incorrect_fb: "घातक विनियामक उल्लंघन! डीजीएमएस बाहरी संतरी और प्रमाणित ट्राइपॉड विंच के बिना प्रवेश को सख्त रूप से प्रतिबंधित करता है।",

      // Retake Screen & Status
      tag_retake_required: "पुनः परीक्षा आवश्यक",
      failed_result_title: "दक्षता मानक पूर्ण नहीं हुआ",
      failed_result_sub: "डीजीएमएस प्रमाणन पासपोर्ट के लिए 75% उत्तीर्ण अंक आवश्यक हैं।",
      lbl_correct_answers: "सही उत्तर:",
      lbl_pass_threshold: "उत्तीर्ण सीमा:",
      lbl_audit_status: "ऑडिट स्थिति:",
      badge_status_retake: "पुनः परीक्षा आवश्यक • एडमिन में दर्ज",
      failed_remediation_note: "सुरक्षा संकेतकों की समीक्षा करें, वेंटिलेशन निकास मार्गों और आपातकालीन नियमों की पुष्टि करें, फिर दोबारा प्रयास करें।",
      btn_retake_module: "प्रशिक्षण मॉड्यूल पुनः प्रारंभ करें",
      th_worker_training_status: "एआर सुरक्षा स्थिति",
      status_not_attempted: "अप्रत्यक्ष",
      status_certified: "प्रमाणित",
      status_retake: "पुनः परीक्षा",
      txt_tasks_count: "4 में से {correct} कार्य",
      
      modal_reg_kicker: "एडमिन पोर्टल • औद्योगिक ऑनबोर्डिंग",
      modal_reg_title: "औद्योगिक इकाई पंजीकरण",
      lbl_next_id: "अगली आईडी:",
      reg_tip_content: "KawachAR पंजीकृत इकाइयों को सीधे श्रमिकों के स्मार्टफोन कैमरों से जोड़कर वास्तविक समय सुरक्षा प्रदान करता है।",
      err_correct_fields: "कृपया हाइलाइट किए गए फ़ील्ड को सही करें:",
      err_correct_fields_sub: "सभी आवश्यक फ़ील्ड भरें और कम से कम एक विभाग चुनें।",
      sec1_title: "इकाई एवं कानूनी विवरण",
      sec1_desc: "कानूनी इकाई, उद्योग वर्गीकरण और स्थान विवरण दर्ज करें",
      lbl_org_name: "कंपनी / फैक्ट्री का नाम",
      ph_org_name: "उदा. भारत माइनिंग एंड मिनरल्स कॉर्प यूनिट #4",
      err_org_name: "कंपनी का नाम आवश्यक है।",
      lbl_industry_type: "उद्योग का प्रकार",
      opt_select_industry: "उद्योग का चयन करें...",
      ind_mining: "खनन (ओपन-कास्ट / भूमिगत)",
      ind_steel: "इस्पात (स्मेल्टिंग / रोलिंग)",
      ind_mfg: "विनिर्माण (भारी उपकरण)",
      ind_mica: "अभ्रक/माइका (खनन / प्रसंस्करण)",
      err_industry_type: "कृपया उद्योग का प्रकार चुनें।",
      lbl_facility_location: "इकाई का स्थान / पता",
      ph_location: "उदा. धनबाद खनन क्षेत्र, झारखंड",
      err_location: "इकाई का स्थान आवश्यक है।",
      
      lbl_reg_type: "पंजीकरण दस्तावेज़ का प्रकार",
      reg_choice_licence_title: "पंजीकरण / लाइसेंस संख्या",
      reg_choice_licence_sub: "फैक्ट्री लाइसेंस, माइनिंग लीज या DGMS नंबर",
      reg_choice_udyam_title: "उद्यम पंजीकरण संख्या",
      reg_choice_udyam_sub: "आधिकारिक MSME उद्यम पंजीकरण",
      lbl_reg_doc_licence: "आधिकारिक पंजीकरण / लाइसेंस संख्या",
      ph_reg_licence: "उदा. DGMS/MIN/2024/8892 या कोई भी 10-अंकीय संख्या",
      hint_reg_licence: "वैध लाइसेंस प्रारूप या डेमो के लिए 10-अंकीय संख्या स्वीकार्य है",
      lbl_reg_doc_udyam: "उद्यम पंजीकरण संख्या (MSME)",
      ph_reg_udyam: "उदा. UDYAM-JH-02-0049281 या कोई भी 10-अंकीय संख्या",
      hint_reg_udyam: "आधिकारिक उद्यम प्रारूप या डेमो के लिए 10-अंकीय संख्या स्वीकार्य है",
      err_reg_doc_value: "कृपया वैध पंजीकरण या 10-अंकीय संख्या दर्ज करें।",
      
      sec2_title: "सक्रिय परिचालन विभाग (साइट दायरा)",
      dept_of_selected: "में से 15 चयनित",
      sec2_desc: "इस इकाई में सक्रिय सभी विभागों का चयन करें।",
      lbl_custom_dept: "कस्टम विभाग का नाम",
      err_select_dept: "कृपया कम से कम एक सक्रिय विभाग चुनें।",
      sec3_title: "नामित सुरक्षा अधिकारी / प्लांट एडमिन",
      sec3_desc: "आपातकालीन एआर अलर्ट और डीजीएमएस ऑडिट के लिए संपर्क बिंदु",
      lbl_officer_name: "अधिकारी / एडमिन का नाम",
      err_officer_name: "अधिकारी का नाम आवश्यक है।",
      lbl_contact_number: "संपर्क नंबर",
      err_contact_number: "वैध संपर्क नंबर आवश्यक है।",
      lbl_official_email: "आधिकारिक ईमेल पता",
      err_official_email: "वैध आधिकारिक ईमेल आवश्यक है।",
      modal_footer_note: "सभी सबमिशन एक अधिकृत KAW पहचानकर्ता उत्पन्न करते हैं",
      btn_cancel: "रद्द करें",
      btn_register_gen_id: "पंजीकृत करें और KAW-ID बनाएं",
      
      modal_add_worker_kicker: "कार्यबल ऑनबोर्डिंग • एडमिन नियंत्रण",
      modal_add_worker_title: "श्रमिक का नामांकन करें",
      lbl_next_worker_id: "अगली कर्मचारी आईडी:",
      add_worker_tip: "उत्पन्न कर्मचारी आईडी (EMP-XXXX) कर्मचारी का स्थायी यूजरनेम होगी। कर्मचारी पहले लॉगिन पर अपना पासवर्ड सेट करेंगे।",
      lbl_assigned_facility: "आवंटित औद्योगिक इकाई",
      opt_select_facility_scope: "सक्रिय विभागों को लोड करने के लिए इकाई चुनें...",
      err_select_facility: "कृपया औद्योगिक इकाई का चयन करें।",
      lbl_full_name: "कर्मचारी का पूरा नाम",
      ph_worker_name: "उदा. रमेश कुमार सोरेन",
      err_worker_name: "पूरा नाम आवश्यक है।",
      lbl_mobile_number: "मोबाइल नंबर",
      err_mobile_number: "वैध 10-अंकीय मोबाइल नंबर आवश्यक है।",
      lbl_residential_address: "आवासीय पता / कॉलोनी का स्थान",
      ph_worker_address: "उदा. क्वार्टर बी-42, माइनिंग ऑफिसर्स कॉलोनी, धनबाद, झारखंड",
      err_address: "आवासीय पता आवश्यक है।",
      lbl_aadhaar_demo: "आधार नंबर",
      pill_demo_field: "मास्क किया गया डेमो फ़ील्ड",
      hint_aadhaar_demo: "पहचान प्रारूप (केवल डेमो के लिए, कोई वास्तविक सत्यापन नहीं)",
      lbl_assigned_depts: "आवंटित परिचालन विभाग",
      hint_select_facility_first: "सक्रिय परिचालन विभागों को लोड करने के लिए ऊपर एक इकाई चुनें।",
      err_select_worker_dept: "कृपया कम से कम एक विभाग चुनें।",
      btn_enroll_generate_emp: "श्रमिक जोड़ें और EMP-ID बनाएं",
      
      worker_enrolled_title: "कर्मचारी सफलतापूर्वक नामांकित!",
      worker_enrolled_subtitle: "पहले मोबाइल लॉगिन के लिए ये क्रेडेंशियल कर्मचारी के साथ साझा करें।",
      lbl_worker_username: "कर्मचारी लॉगिन यूज़रनेम",
      btn_copy: "कॉपी करें",
      note_worker_first_login: "कर्मचारी मोबाइल ऐप में पहले लॉगिन पर अपना पासवर्ड बनाएंगे।",
      summary_worker_name: "कर्मचारी का नाम",
      summary_facility: "इकाई",
      summary_mobile: "मोबाइल",
      summary_assigned_depts: "आवंटित विभाग",
      btn_done: "पूर्ण",
      
      facility_registered_title: "इकाई सफलतापूर्वक पंजीकृत!",
      facility_registered_subtitle: "आपकी औद्योगिक इकाई कवच-एआर नेटवर्क में नामांकित हो गई है।",
      lbl_org_id: "स्वतः उत्पन्न इकाई आईडी",
      summary_industry: "उद्योग प्रकार",
      summary_location: "स्थान",
      summary_document: "पंजीकरण दस्तावेज़",
      summary_active_depts: "सक्रिय विभाग",
      summary_admin: "सुरक्षा अधिकारी / एडमिन",
      
      // Shared Demo Dataset (Req 3 & 4)
      demo_org_name: "भारत माइनिंग एंड मिनरल्स कॉर्प यूनिट #4",
      demo_org_location: "धनबाद खनन क्षेत्र, झारखंड",
      demo_admin_name: "इंजी. राजेश्वर वर्मा",
      demo_worker_name: "रमेश कुमार सोरेन",
      demo_worker_address: "क्वार्टर बी-42, माइनिंग ऑफिसर्स कॉलोनी, धनबाद, झारखंड",
      toast_demo_facility_filled: "डेमो औद्योगिक इकाई का विवरण स्वतः भर दिया गया।",
      toast_demo_worker_filled: "डेमो श्रमिक विवरण स्वतः भर दिया गया।",
      toast_demo_login_filled: "डेमो लॉगिन क्रेडेंशियल स्वतः भर दिया गया।",

      // AR and Certificate Audit
      tab_verify_cert: "प्रमाणपत्र सत्यापन एवं ऑडिट",
      sec_verify_kicker: "डीजीएमएस अनुपालन ऑडिट इंजन",
      sec_verify_title: "क्यूआर प्रमाणपत्र सत्यापन एवं रजिस्ट्री",
      sec_verify_subtitle: "हस्ताक्षरित डिजिटल सुरक्षा प्रमाणपत्र खोजें, प्रामाणिकता जांचें और अनुपालन रिकॉर्ड देखें।",
      verify_box_title: "सुरक्षा प्रमाणपत्र की प्रामाणिकता जांचें",
      verify_box_desc: "श्रमिक के क्यूआर पास पर अंकित प्रमाणपत्र आईडी दर्ज करें (प्रारूप: KAW-CERT-XXXXX)",
      ph_cert_lookup: "उदा. KAW-CERT-84921",
      btn_verify_cert: "प्रमाणपत्र सत्यापित करें",
      lbl_recent_certs: "हालिया जारी पास:",
      hint_no_issued_certs: "प्रमाणपत्र बनाने के लिए श्रमिक ऐप में प्रशिक्षण मॉड्यूल पूरा करें",
      title_issued_registry: "जारी श्रमिक सुरक्षा प्रमाणपत्र (ऑडिट लॉग)",
      th_cert_id: "प्रमाणपत्र आईडी",
      th_worker_name: "श्रमिक नाम",
      th_worker_facility: "आवंटित इकाई",
      th_module_completed: "पूर्ण मॉड्यूल",
      th_cert_score: "स्कोर एवं स्थिति",
      th_issued_at: "जारी करने की तिथि",
      th_cert_actions: "कार्रवाई",
      btn_start_module: "एआर मॉड्यूल शुरू करें",
      btn_confirm_choice: "चयन की पुष्टि करें",
      btn_all_modules: "सभी मॉड्यूल",
      cert_verified_tag: "डीजीएमएस सत्यापित",
      cert_doc_title: "डिजिटल सुरक्षा दक्षता पासपोर्ट",
      lbl_certified_module: "प्रमाणित मॉड्यूल:",
      lbl_final_score: "अंतिम स्कोर",
      cert_passed_status: "उत्तीर्ण • अनुपालन स्वीकृत",
      cert_digitally_signed: "डिजिटल रूप से हस्ताक्षरित एवं सीलबंद",
      btn_return_modules: "प्रशिक्षण मॉड्यूल पर लौटें",
      btn_verify_in_admin: "एडमिन पोर्टल में सत्यापित करें",
      ar_scan_init: "एआर इंजन प्रारंभ हो रहा है...",
      lbl_sim_feed: "सिम्युलेटेड एआर कैमरा फीड",
      btn_view_cert: "प्रमाणपत्र देखें",
      btn_view_slip: "पर्ची देखें",
      btn_verify: "सत्यापित करें",
      admin_cert_modal_kicker: "डीजीएमएस अनुपालन सत्यापित",
      admin_cert_modal_title: "श्रमिक सुरक्षा प्रमाणपत्र",
      admin_cert_modal_subtitle: "सत्यापित डीजीएमएस डिजिटल योग्यता साख",
      btn_view_in_audit: "ऑडिट इंजन में सत्यापित करें",

      // Missing Table Headers & Cert Details
      th_score_pct: "स्कोर %",
      th_issue_date: "जारी करने की तिथि एवं समय",
      th_verification_status: "सत्यापन स्थिति",
      empty_certs_title: "अभी तक कोई सुरक्षा प्रमाणपत्र दर्ज नहीं है",
      empty_certs_desc: "डीजीएमएस-सत्यापित प्रमाणपत्र बनाने के लिए कर्मचारी ऐप में प्रशिक्षण मॉड्यूल पूरा करें।",
      badge_coming_soon: "अगले संस्करण में उपलब्ध",
      mod_machinery_tag: "मॉड्यूल 03 • भारी उपकरण",
      mod_machinery_title: "HEMM हॉल-ट्रक ब्लाइंड-स्पॉट डिटेक्शन",
      mod_machinery_desc: "फोन कैमरे द्वारा ऑपरेटर के ब्लाइंड ज़ोन का 360-डिग्री दृश्य।",
      lbl_disabled_mod: "पूर्वावलोकन मॉड्यूल (लॉक)",
      mod_electrical_tag: "मॉड्यूल 04 • विद्युत सुरक्षा",
      mod_electrical_title: "उच्च-वोल्टेज सबस्टेशन आर्क फ्लैश सुरक्षा",
      mod_electrical_desc: "लाइव 33kV स्विचयार्ड क्लीयरेंस परिधि दिशानिर्देश।",
      mod_ppe_tag: "मॉड्यूल 05 • पीपीई एवं पतन सुरक्षा",
      mod_ppe_title: "ऊंचाई पर कार्य एवं हार्नेस सुरक्षा",
      mod_ppe_desc: "पतन गिरफ्तारी प्रणाली और हार्नेस सुरक्षा निरीक्षण।",
      lbl_cert_id: "प्रमाणपत्र आईडी:",
      lbl_crypto_hash: "क्रिप्टोग्राफ़िक हैश:",
      lbl_dgms_valid: "डीजीएमएस मान्य एवं सक्रिय",
      lbl_dgms_standard: "खान सुरक्षा महानिदेशालय (डीजीएमएस) मानक",
      lbl_worker_auth: "कर्मचारी प्रमाणीकरण",
      lbl_emp_format: "प्रारूप: EMP-XXXX",
      duration_15_mins: "15 मिनट",
      duration_10_mins: "10 मिनट",
      failed_pass_threshold_note: "75% (4 में से 3 कार्य)",
      err_custom_dept_name: "कृपया कस्टम विभाग का नाम निर्दिष्ट करें।",
      err_admin_worker_fields: "कृपया सभी आवश्यक फ़ील्ड भरें।",
      phone_sub_modules: "डीजीएमएस सुरक्षा एआर शील्ड",
      phone_sub_ar: "एआर लाइव टेलीमेट्री",
      phone_sub_cert: "डिजिटल सुरक्षा पासपोर्ट",
      phone_sub_failed: "दक्षता मूल्यांकन",

      // Department Names & Subtitles
      dept_mining_name: "खनन / निष्कर्षण परिचालन",
      dept_mining_sub: "पिट, खदान एवं अयस्क निष्कर्षण",
      dept_prod_name: "उत्पादन / विनिर्माण",
      dept_prod_sub: "असेंबली एवं निर्माण लाइनें",
      dept_proc_name: "प्रसंस्करण / सामग्री हैंडलिंग",
      dept_proc_sub: "क्रशिंग, छंटाई एवं कन्वेयर बे",
      dept_mech_name: "मैकेनिकल",
      dept_mech_sub: "भारी संयंत्र मशीनरी एवं हाइड्रोलिक्स",
      dept_elec_name: "इलेक्ट्रिकल",
      dept_elec_sub: "सबस्टेशन, एचटी गियर एवं पावर लाइनें",
      dept_maint_name: "रखरखाव / मेंटेनेंस",
      dept_maint_sub: "निवारक एवं सुधारात्मक ओवरहाल",
      dept_plant_name: "प्लांट / उपकरण संचालन",
      dept_plant_sub: "बॉयलर, भट्टियां एवं रोटरी इकाइयां",
      dept_safety_name: "सुरक्षा / एचएसई",
      dept_safety_sub: "डीजीएमएस, अनुपालन एवं खतरा नियंत्रण",
      dept_qa_name: "गुणवत्ता नियंत्रण / क्यूए",
      dept_qa_sub: "प्रयोगशाला परीक्षण एवं क्यूए रिलीज",
      dept_util_name: "उपयोगिताएं / विद्युत एवं ऊर्जा",
      dept_util_sub: "जल उपचार, गैस एवं पावर ग्रिड",
      dept_store_name: "वेयरहाउस / स्टोर्स",
      dept_store_sub: "कच्चा माल एवं स्पेयर स्टोरेज",
      dept_log_name: "लॉजिस्टिक्स / परिवहन",
      dept_log_sub: "फ्लीट, ढुलाई एवं प्रेषण रसद",
      dept_eng_name: "इंजीनियरिंग / प्रोजेक्ट्स",
      dept_eng_sub: "सिविल, साइट डिजाइन एवं विस्तार",
      dept_hr_name: "प्रशासन / मानव संसाधन (HR)",
      dept_hr_sub: "कार्यबल संचालन एवं प्लांट प्रबंधन",
      dept_other_name: "अन्य",
      dept_other_sub: "कस्टम विभाग निर्दिष्ट करें"
    },

    sat: {
      brand_tagline: "ᱠᱟᱹᱨᱜᱟᱲ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱨ AR ᱴᱮᱞᱤᱢᱮᱴᱨᱤ ᱰᱷᱟᱞ (Safety Shield)",
      nav_landing_view: "ᱡᱚᱦᱟᱨ ᱯᱚᱨᱴᱟᱞ (Welcome)",
      nav_admin_view: "ᱮᱰᱢᱤᱱ ᱰᱮᱥᱵᱳᱨᱰ",
      nav_worker_view: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱢᱳᱵᱟᱭᱤᱞ ᱮᱯ",
      nav_home: "ᱚᱲᱟᱜ (Home)",
      nav_admin_portal: "ᱮᱰᱢᱤᱱ ᱯᱚᱨᱴᱟᱞ",
      nav_admin_sub: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ",
      nav_worker_app: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱚᱜᱤᱱ",
      nav_worker_sub: "ᱮᱱᱰᱨᱚᱭᱤᱰ AR ᱠᱞᱟᱭᱮᱱᱴ",
      
      landing_badge: "ᱱᱟᱣᱟ ᱡᱩᱜᱽ ᱠᱟᱹᱨᱜᱟᱲ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ",
      landing_title_main: "ᱠᱟᱹᱨᱜᱟᱲ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ AR ᱫᱟᱲᱮ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ",
      landing_title_p1: "ᱡᱤᱨᱳ-ᱦᱟᱨᱰᱣᱮᱭᱟᱨ AR ᱨᱩᱠᱷᱤᱭᱟᱹ",
      landing_title_p2: "ᱠᱟᱹᱨᱜᱟᱲ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ",
      landing_mission_desc: "KawachAR ᱫᱚ ᱢᱟᱨᱮ ᱴᱨᱮᱱᱤᱝ ᱵᱚᱫᱚᱞ ᱛᱮ ᱥᱢᱟᱨᱴᱯᱷᱳᱱ AR ᱛᱮ ᱞᱟᱭᱤᱵᱷ ᱵᱚᱛᱚᱨ ᱩᱫᱩᱜ ᱠᱟᱛᱮ ᱥᱩᱨᱚᱠᱷᱤᱭᱟᱹ ᱮᱢᱟᱭ᱾ ᱱᱚᱶᱟ ᱫᱚ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱠᱷᱟᱫᱟᱱ (Mining), ᱤᱥᱯᱟᱛ (Steel) ᱟᱨ ᱚᱵᱷᱨᱚᱠ (Mica) ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱰᱤᱡᱤᱴᱟᱞ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱮ ᱮᱢᱟ ᱠᱚᱣᱟ᱾",
      mission_tag_1: "ᱥᱚᱨᱮᱥ ᱥᱮᱪᱮᱫ ᱫᱟᱲᱮ",
      mission_tag_2: "ᱵᱤᱱᱟᱹ ᱠᱷᱚᱨᱚᱪ ᱥᱢᱟᱨᱴᱯᱷᱳᱱ AR",
      mission_tag_3: "DGMS ᱰᱤᱡᱤᱴᱟᱞ ᱯᱟᱥᱯᱳᱨᱴ",
      btn_fill_demo: "ᱰᱮᱢᱳ ᱵᱤᱵᱚᱨᱚᱱ ᱯᱮᱨᱮᱡᱽ ᱢᱮ",
      hero_img_tag: "ᱞᱟᱭᱤᱵᱷ AR ᱵᱚᱛᱚᱨ ᱴᱮᱞᱤᱢᱮᱴᱨᱤ • ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱠᱷᱟᱫᱟᱱ ᱟᱨ ᱤᱥᱯᱟᱛ",
      
      lang_select_title: "ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ (Language)",
      lang_select_sub: "ᱟᱢᱟᱜ ᱟᱭᱳ ᱟᱲᱟᱝ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾ ᱡᱚᱛᱚ ᱥᱠᱨᱤᱱ ᱨᱮ ᱵᱚᱫᱚᱞᱚᱜᱼᱟ᱾",
      lang_ai_badge: "AI ᱛᱚᱨᱡᱚᱢᱟ (ᱯᱟᱹᱦᱤᱞ ᱪᱷᱟᱸᱪ)",
      
      entry_portals_title: "ᱞᱟᱦᱟᱜ ᱞᱟᱹᱜᱤᱫ ᱯᱚᱨᱴᱟᱞ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
      entry_portals_sub: "ᱮᱰᱢᱤᱱ ᱢᱮᱱᱮᱡᱽᱢᱮᱱᱴ ᱥᱮ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱢᱳᱵᱟᱭᱤᱞ ᱮᱯ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      portal_admin_badge: "ᱣᱮᱵᱽ ᱰᱮᱥᱵᱳᱨᱰ",
      portal_admin_title: "ᱮᱰᱢᱤᱱ ᱯᱚᱨᱴᱟᱞ",
      portal_admin_desc: "ᱠᱟᱹᱨᱜᱟᱲ ᱚᱞ ᱢᱮ, ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱵᱟᱪᱷᱟᱣ ᱢᱮ, ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱥᱮᱞᱮᱫ ᱠᱚ ᱢᱮ ᱟᱨ EMP ID ᱮᱢᱟ ᱠᱚ ᱢᱮ᱾",
      portal_admin_feat_1: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ Udyam ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ",
      portal_admin_feat_2: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱟᱨ EMP ID",
      portal_admin_feat_3: "ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱢᱚᱰᱮᱞ",
      btn_enter_admin: "ᱮᱰᱢᱤᱱ ᱯᱚᱨᱴᱟᱞ ᱨᱮ ᱵᱚᱞᱚᱱ ᱢᱮ",
      
      portal_worker_badge: "ᱢᱳᱵᱟᱭᱤᱞ ᱮᱱᱰᱨᱚᱭᱤᱰ ᱮᱯ",
      portal_worker_title: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱚᱜᱤᱱ",
      portal_worker_desc: "ᱮᱱᱰᱨᱚᱭᱤᱰ ᱢᱳᱵᱟᱭᱤᱞ ᱨᱮ ᱞᱚᱜᱤᱱ ᱢᱮ᱾ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱠᱟᱛᱮ ᱯᱟᱥᱣᱟᱨᱰ ᱵᱮᱱᱟᱣ ᱢᱮ ᱟᱨ AR ᱴᱨᱮᱱᱤᱝ ᱮᱛᱚᱦᱚᱵ ᱢᱮ᱾",
      portal_worker_feat_1: "ᱥᱟᱹᱨᱤ ᱢᱳᱵᱟᱭᱤᱞ ᱯᱷᱳᱱ ᱯᱷᱨᱮᱢ",
      portal_worker_feat_2: "ᱯᱟᱹᱦᱤᱞ ᱯᱟᱥᱣᱟᱨᱰ ᱟᱨ ᱞᱮᱛᱟᱲ ᱞᱚᱜᱤᱱ",
      portal_worker_feat_3: "᱑-ᱠᱞᱤᱠ ᱰᱮᱢᱳ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱚᱜᱤᱱ",
      btn_enter_worker: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱮᱯ ᱡᱷᱤᱡ ᱢᱮ",
      
      admin_hero_badge: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ • DGMS ᱱᱮᱴᱣᱟᱨᱠ",
      admin_hero_title_p1: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ",
      admin_hero_title_p2: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱢᱮᱱᱮᱡᱽᱢᱮᱱᱴ",
      admin_hero_desc: "ᱠᱷᱟᱫᱟᱱ, ᱤᱥᱯᱟᱛ ᱟᱨ ᱚᱵᱷᱨᱚᱠ ᱯᱞᱟᱱᱴ ᱚᱞ ᱢᱮ, ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱥᱟᱡᱟᱣ ᱢᱮ ᱟᱨ AR ᱴᱨᱮᱱᱤᱝ ᱞᱟᱹᱜᱤᱫ EMP ID ᱮᱢᱟ ᱠᱚ ᱢᱮ᱾",
      btn_register_site: "ᱱᱟᱣᱟ ᱠᱟᱹᱨᱜᱟᱲ ᱚᱞ ᱢᱮ",
      btn_enroll_worker: "ᱱᱟᱣᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱢᱮ",
      btn_open_worker_client: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱮᱯ ᱪᱟᱹᱞᱩᱭ ᱢᱮ (Phone)",
      
      stat_registered_orgs: "ᱚᱞ ᱟᱠᱟᱱ ᱠᱟᱹᱨᱜᱟᱲ",
      stat_active_depts: "ᱪᱟᱹᱞᱩ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ",
      stat_enrolled_workers: "ᱥᱮᱞᱮᱫ ᱠᱟᱹᱢᱤᱭᱟᱹ",
      
      tab_facilities: "ᱠᱟᱹᱨᱜᱟᱲ ᱛᱟᱹᱞᱠᱟᱹ",
      tab_workers: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱛᱟᱹᱞᱠᱟᱹ",
      
      sec_facilities_kicker: "ᱢᱩᱬᱩᱛ ᱠᱟᱹᱨᱜᱟᱲ ᱨᱮᱡᱤᱥᱴᱨᱤ",
      sec_facilities_title: "ᱚᱞ ᱟᱠᱟᱱ ᱠᱟᱹᱨᱜᱟᱲ ᱠᱚ",
      sec_facilities_subtitle: "ᱡᱚᱛᱚ ᱠᱟᱹᱨᱜᱟᱲ ᱞᱟᱹᱜᱤᱫ KAW-XXXXX ᱠᱳᱰ ᱮᱢ ᱟᱠᱟᱱᱟ",
      search_facilities_ph: "ᱧᱩᱛᱩᱢ, ID, ᱥᱟᱦᱟᱨ ᱛᱮ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ...",
      btn_register_new_site: "ᱱᱟᱣᱟ ᱠᱟᱹᱨᱜᱟᱲ ᱚᱞ ᱢᱮ",
      empty_facilities_title: "ᱡᱟᱦᱟᱸᱱ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱝ ᱧᱟᱢ ᱞᱮᱱᱟ",
      empty_facilities_desc: "ᱯᱟᱹᱦᱤᱞ ᱠᱟᱹᱨᱜᱟᱲ ᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱴᱚᱱ ᱚᱛᱟᱭ ᱢᱮ᱾",
      
      th_org_id: "ᱠᱟᱹᱨᱜᱟᱲ ID",
      th_facility_name: "ᱠᱟᱹᱨᱜᱟᱲ ᱧᱩᱛᱩᱢ ᱟᱨ ᱴᱷᱟᱶ",
      th_industry_type: "ᱠᱟᱹᱨᱜᱟᱲ ᱦᱟᱹᱴᱤᱧ",
      th_reg_doc: "ᱞᱟᱭᱥᱮᱱᱥ / ᱚᱞ ᱱᱚᱢᱵᱚᱨ",
      th_active_depts: "ᱪᱟᱹᱞᱩ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ",
      th_safety_officer: "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱯᱷᱤᱥᱟᱨ / ᱮᱰᱢᱤᱱ",
      th_actions: "ᱠᱟᱹᱢᱤ",
      
      sec_workers_kicker: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱮᱡᱤᱥᱴᱨᱤ",
      sec_workers_title: "ᱥᱮᱞᱮᱫ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ",
      sec_workers_subtitle: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ EMP-XXXX ᱤᱭᱩᱡᱟᱨ ᱧᱩᱛᱩᱢ ᱮᱢ ᱟᱠᱟᱱᱟ",
      search_workers_ph: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱧᱩᱛᱩᱢ, EMP ID ᱛᱮ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ...",
      btn_add_worker: "ᱱᱟᱣᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱢᱮ",
      empty_workers_title: "ᱱᱤᱛ ᱫᱷᱟᱹᱵᱤᱡ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱵᱟᱝ ᱠᱚ ᱥᱮᱞᱮᱫ ᱟᱠᱟᱱᱟ",
      empty_workers_desc: "ᱮᱰᱢᱤᱱ ᱠᱷᱚᱱ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱠᱟᱛᱮ EMP ID ᱵᱮᱱᱟᱣ ᱢᱮ᱾",
      
      th_worker_id: "ᱠᱟᱹᱢᱤᱭᱟᱹ ID",
      th_worker_name: "ᱯᱩᱨᱟᱹ ᱧᱩᱛᱩᱢ",
      th_worker_facility: "ᱠᱟᱹᱨᱜᱟᱲ",
      th_worker_mobile: "ᱢᱳᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ",
      th_worker_aadhaar: "ᱟᱫᱷᱟᱨ (ᱰᱮᱢᱳ)",
      th_worker_depts: "ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ",
      th_worker_status: "ᱠᱷᱟᱛᱟ ᱦᱟᱞᱚᱛ",
      
      worker_workspace_badge: "ᱮᱱᱰᱨᱚᱭᱤᱰ ᱢᱳᱵᱟᱭᱤᱞ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ",
      btn_reset_flow: "ᱨᱤᱥᱮᱴ ᱢᱮ",
      phone_header_sub: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱠᱞᱟᱭᱮᱱᱴ",
      
      worker_login_title: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱚᱜᱤᱱ",
      worker_login_sub: "ᱟᱢᱟᱜ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱟᱨ Worker ID ᱛᱮ ᱵᱚᱞᱚᱱ ᱢᱮ᱾",
      demo_worker_title: "ᱞᱟᱭᱤᱵᱷ ᱰᱮᱢᱳ ᱞᱚᱜᱤᱱ",
      demo_worker_desc: "ᱰᱮᱢᱳ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱛᱮ ᱞᱚᱜᱤᱱ ᱢᱮ:",
      btn_use_demo_worker: "ᱰᱮᱢᱳ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱵᱮᱵᱷᱟᱨ ᱢᱮ (Ramesh - EMP-0001)",
      login_or_divider: "ᱥᱮ ᱱᱤᱡᱮ ᱚᱞ ᱢᱮ",
      
      lbl_select_org: "ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
      opt_choose_facility: "ᱟᱢᱟᱜ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ...",
      err_select_org: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      lbl_worker_id: "ᱠᱟᱹᱢᱤᱭᱟᱹ ID (EMP-XXXX)",
      err_worker_id: "Worker ID ᱚᱞ ᱢᱮ᱾",
      
      first_time_title: "ᱯᱟᱹᱦᱤᱞ ᱫᱷᱟᱣ ᱞᱚᱜᱤᱱ",
      first_time_sub: "ᱱᱚᱶᱟ ID ᱫᱚ ᱱᱤᱛ ᱫᱷᱟᱹᱵᱤᱡ ᱵᱟᱝ ᱪᱟᱹᱞᱩ ᱟᱠᱟᱱᱟ᱾ ᱯᱟᱥᱣᱟᱨᱰ ᱵᱮᱱᱟᱣ ᱢᱮ:",
      lbl_password: "ᱯᱟᱥᱣᱟᱨᱰ (Password)",
      ph_password: "ᱯᱟᱥᱣᱟᱨᱰ ᱚᱞ ᱢᱮ (ᱠᱚᱢ ᱠᱷᱚᱱ ᱠᱚᱢ ᱖ ᱪᱤᱠᱤ)",
      err_password: "ᱯᱟᱥᱣᱟᱨᱰ ᱨᱮ ᱠᱚᱢ ᱠᱷᱚᱱ ᱠᱚᱢ ᱖ ᱪᱤᱠᱤ ᱛᱟᱦᱮᱸᱱ ᱞᱟᱹᱠᱛᱤ᱾",
      lbl_confirm_password: "ᱯᱟᱥᱣᱟᱨᱰ ᱫᱚᱦᱲᱟ ᱚᱞ ᱢᱮ",
      ph_confirm_password: "ᱯᱟᱥᱣᱟᱨᱰ ᱟᱨ ᱢᱤᱫ ᱫᱷᱟᱣ ᱚᱞ ᱢᱮ",
      err_pwd_mismatch: "ᱵᱟᱱᱟᱨ ᱯᱟᱥᱣᱟᱨᱰ ᱵᱟᱝ ᱢᱤᱞᱟᱹᱣ ᱞᱮᱱᱟ᱾",
      btn_login_worker: "KawachAR ᱨᱮ ᱵᱚᱞᱚᱱ ᱢᱮ",
      btn_set_pwd_login: "ᱯᱟᱥᱣᱟᱨᱰ ᱥᱟᱡᱟᱣ ᱠᱟᱛᱮ ᱵᱚᱞᱚᱱ ᱢᱮ",
      help_no_id: "Worker ID ᱵᱟᱹᱱᱩᱜᱼᱟ?",
      help_contact_admin: "ᱮᱰᱢᱤᱱ ᱯᱚᱨᱴᱟᱞ ᱨᱮ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱯᱷᱤᱥᱟᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱥᱮᱞᱮᱫ ᱠᱚᱣᱟᱭ᱾",
      
      geo_fence_active: "DGMS AR ᱡᱤᱭᱳ-ᱯᱷᱮᱱᱥ ᱪᱟᱹᱞᱩ",
      geo_fence_sub: "ᱢᱳᱵᱟᱭᱤᱞ AR ᱠᱮᱢᱮᱨᱟ ᱛᱮᱭᱟᱨ ᱜᱮᱭᱟ",
      status_online: "ᱚᱱᱞᱟᱭᱤᱱ",
      status_offline: "ᱚᱯᱷᱞᱟᱭᱤᱱ",
      status_syncing: "ᱥᱤᱝᱠᱤᱝ...",
      status_synced: "ᱥᱤᱝᱠ ᱦᱩᱭᱮᱱᱟ ✓",
      badge_offline_pending: "ᱞᱳᱠᱟᱞ ᱨᱮ ᱥᱟᱵᱷᱟᱣ ᱮᱱᱟ, ᱥᱤᱝᱠ ᱵᱟᱹᱠᱤ",
      badge_synced_cloud: "DGMS ᱠᱞᱟᱣᱩᱰ ᱥᱟᱶ ᱥᱤᱝᱠ ᱮᱱᱟ",
      offline_notice_text: "ᱞᱳᱠᱟᱞ ᱨᱮ ᱥᱟᱵᱷᱟᱣ ᱮᱱᱟ, DGMS ᱨᱮ ᱥᱤᱝᱠ ᱵᱟᱹᱠᱤ᱾",
      offline_toast_title: "ᱚᱯᱷᱞᱟᱭᱤᱱ ᱢᱳᱰ ᱪᱟᱹᱞᱩ",
      offline_toast_desc: "ᱵᱤᱱ-ᱱᱮᱴᱣᱟᱨᱠ ᱢᱳᱰ: ᱡᱚᱛᱚ ᱴᱨᱮᱱᱤᱝ ᱞᱳᱠᱟᱞ ᱨᱮ ᱥᱟᱵᱷᱟᱣᱜᱼᱟ᱾",
      toast_syncing_records: "ᱚᱯᱷᱞᱟᱭᱤᱱ ᱴᱨᱮᱱᱤᱝ ᱨᱤᱠᱚᱨᱰ DGMS ᱠᱞᱟᱣᱩᱰ ᱨᱮ ᱥᱤᱝᱠᱚᱜ ᱠᱟᱱᱟ...",
      toast_synced_success: "ᱥᱤᱝᱠ ᱦᱩᱭᱮᱱᱟ! ᱮᱰᱢᱤᱱ ᱨᱮ ᱨᱤᱠᱚᱨᱰ ᱟᱯᱰᱮᱴ ᱮᱱᱟ᱾",
      modules_heading: "ᱴᱨᱮᱱᱤᱝ ᱢᱚᱰᱮᱞ",
      modules_subheading: "ᱥᱢᱟᱨᱴᱯᱷᱳᱱ AR ᱵᱚᱛᱚᱨ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱟᱨ DGMS ᱥᱮᱪᱮᱫ᱾",
      phase3_kicker: "ᱛᱮᱥᱟᱨ ᱦᱟᱹᱴᱤᱧ ᱩᱫᱩᱜ",
      phase3_title: "AR ᱠᱮᱢᱮᱨᱟ ᱥᱤᱢᱩᱞᱮᱴᱚᱨ ᱪᱟᱹᱞᱩ",
      phase3_desc: "3D ᱵᱚᱛᱚᱨ ᱢᱚᱰᱮᱞ, ᱵᱤᱥ ᱦᱚᱭ ᱟᱨ ᱢᱮᱥᱤᱱ ᱰᱮᱸᱡᱟᱨ ᱡᱳᱱ ᱱᱚᱶᱟ ᱯᱷᱳᱱ ᱨᱮ ᱩᱫᱩᱜᱚᱜ ᱠᱟᱱᱟ᱾",
      
      mod1_tag: "ᱢᱚᱰᱮᱞ ᱐᱑ • ᱦᱚᱭ-ᱦᱤᱥᱤᱫ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod1_title: "ᱵᱤᱥ ᱦᱚᱭ ᱴᱮᱞᱤᱢᱮᱴᱨᱤ & CH₄/CO ᱪᱤᱨᱜᱟᱹᱞ",
      mod1_desc: "ᱠᱷᱟᱫᱟᱱ ᱵᱷᱤᱛᱨᱤ ᱨᱮ ᱵᱤᱥ ᱦᱚᱭ ᱧᱮᱞ ᱨᱮᱱᱟᱜ AR ᱥᱤᱢᱩᱞᱮᱥᱚᱱ᱾",
      mod2_tag: "ᱢᱚᱰᱮᱞ ᱐᱒ • ᱦᱟᱭ ᱵᱷᱳᱞᱴᱮᱡᱽ",
      mod2_title: "ᱥᱟᱵᱽᱥᱴᱮᱥᱚᱱ ᱦᱟᱭ-ᱴᱮᱱᱥᱚᱱ ᱟᱨᱠ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod2_desc: "ᱠᱟᱨᱮᱱᱴ ᱵᱚᱛᱚᱨ ᱠᱷᱚᱱ ᱥᱟᱺᱜᱤᱧ ᱛᱟᱦᱮᱸᱱ ᱨᱮᱱᱟᱜ AR ᱩᱫᱩᱜ᱾",
      mod3_tag: "ᱢᱚᱰᱮᱞ ᱐᱓ • ᱢᱟᱨᱟᱝ ᱢᱮᱥᱤᱱ",
      mod3_title: "HEMM ᱞᱟᱹᱰᱩ ᱴᱨᱟᱠ ᱵᱞᱟᱭᱤᱱᱰ-ᱥᱯᱳᱴ",
      mod3_desc: "ᱢᱳᱵᱟᱭᱤᱞ ᱠᱮᱢᱮᱨᱟ ᱛᱮ ᱰᱨᱟᱭᱵᱷᱟᱨᱟᱜ ᱵᱟᱝ ᱧᱮᱞᱚᱜ ᱡᱟᱭᱜᱟ ᱧᱮᱞ ᱢᱮ᱾",
      badge_ar_ready: "AR ᱛᱮᱭᱟᱨ",
      btn_logout: "ᱞᱚᱜᱽ ᱟᱣᱩᱴ (Log Out)",
      badge_active_module: "ᱪᱟᱹᱞᱩ • ᱔ ᱠᱟᱹᱢᱤ (4 Tasks)",
      mod_fire_tag: "ᱢᱚᱰᱩᱞ ᱐᱑ • ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱵᱚᱛᱚᱨ",
      mod_fire_title: "ᱥᱮᱸᱜᱮᱞ ᱟᱨ ᱵᱚᱢᱵᱟᱨᱰ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod_fire_desc: "AR ᱨᱮ ᱚᱰᱚᱠᱚᱜ ᱦᱚᱨ ᱪᱤᱱᱦᱟᱹᱣ ᱢᱮ, ᱵᱤᱡᱽᱞᱤ ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱥᱟᱯᱟᱵ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱟᱨ DGMS ᱱᱤᱭᱚᱢ ᱯᱩᱨᱟᱹᱣ ᱢᱮ᱾",
      mod_gas_tag: "ᱢᱚᱰᱩᱞ ᱐᱒ • ᱵᱤᱥ ᱦᱚᱭ-ᱦᱤᱥᱤᱫ",
      mod_gas_title: "ᱜᱮᱥ ᱞᱤᱠ ᱟᱨ ᱥᱟᱸᱜᱤᱧ ᱡᱟᱭᱜᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod_gas_desc: "AR ᱛᱮ ᱵᱚᱛᱚᱨᱟᱱ ᱜᱮᱥ ᱡᱟᱭᱜᱟ ᱪᱤᱱᱦᱟᱹᱣ ᱢᱮ, SCBA ᱥᱟᱦᱮᱫ ᱥᱟᱯᱟᱵ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱟᱨ ᱥᱮᱱᱴᱨᱤ ᱱᱤᱭᱚᱢ ᱯᱩᱨᱟᱹᱣ ᱢᱮ᱾",
      
      // Module 1: Fire & Explosion Tasks (4 Tasks)
      fe_t1_step: "ᱠᱟᱹᱢᱤ ᱑ / ᱔: ᱚᱰᱚᱠᱚᱜ ᱦᱚᱨ ᱪᱤᱱᱦᱟᱹᱣ",
      fe_t1_badge: "AR ᱵᱚᱛᱚᱨ ᱪᱤᱱᱦᱟᱹᱣ",
      fe_t1_title: "ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱚᱰᱚᱠᱚᱜ ᱦᱚᱨ ᱪᱤᱱᱦᱟᱹᱣ",
      fe_t1_scenario: "ᱥᱮᱠᱴᱚᱨ C-4 ᱨᱮ ᱫᱷᱩᱶᱟᱹ ᱞᱚᱜᱚᱱ ᱯᱮᱨᱮᱡᱚᱜ ᱠᱟᱱᱟ᱾ AR ᱨᱮ ᱠᱮᱢᱮᱨᱟ ᱛᱮ ᱧᱮᱞ ᱠᱟᱛᱮ ᱡᱚᱛᱚ ᱠᱷᱚᱱ ᱥᱩᱨᱚᱠᱷᱤᱛ ᱚᱰᱚᱠᱚᱜ ᱦᱮᱪ (Escape Hatch) ᱪᱤᱱᱦᱟᱹ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ᱾",
      fe_t1_marker_label: "ᱚᱰᱚᱠᱚᱜ ᱦᱚᱨ B-2",
      fe_t1_marker_tel: "DGMS ᱯᱷᱟᱨᱪᱟ ᱦᱚᱨ • ᱞᱚᱞᱚ: 24°C • ᱫᱷᱩᱶᱟᱹ ᱯᱷᱟᱨᱪᱟ: 100%",
      fe_t1_opt_a: "ᱦᱮᱪ A-1 (ᱞᱚᱞᱚ ᱟᱨ ᱜᱟᱹᱦᱤᱨ ᱫᱷᱩᱶᱟᱹ ᱢᱮᱱᱟᱜᱼᱟ)",
      fe_t1_opt_b: "ᱦᱮᱪ B-2 (ᱯᱷᱟᱨᱪᱟ ᱦᱚᱨ ᱟᱨ ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱢᱮᱱᱟᱜᱼᱟ)",
      fe_t1_opt_c: "ᱠᱟᱨᱜᱳ ᱞᱤᱯᱷᱴ ᱔ (ᱵᱤᱡᱽᱞᱤ ᱵᱚᱱᱫᱽ ᱟᱨ ᱦᱚᱨ ᱵᱚᱱᱫᱽ)",
      fe_t1_correct_fb: "ᱥᱟᱹᱨᱤ ᱜᱮᱭᱟ! ᱦᱮᱪ B-2 ᱫᱚ ᱫᱷᱩᱶᱟᱹ ᱠᱷᱚᱱ ᱯᱷᱟᱨᱪᱟ ᱜᱮᱭᱟ ᱟᱨ ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱪᱟᱞᱟᱜ ᱠᱟᱱᱟ᱾",
      fe_t1_incorrect_fb: "ᱵᱟᱝ ᱴᱷᱤᱠᱟ! ᱚᱱᱟ ᱦᱚᱨ ᱨᱮ ᱵᱤᱥ ᱫᱷᱩᱶᱟᱹ ᱥᱮ ᱵᱤᱡᱽᱞᱤ ᱵᱚᱱᱫᱽ ᱢᱮᱱᱟᱜᱼᱟ᱾ ᱦᱟᱹᱨᱭᱟᱹᱲ DGMS ᱪᱤᱱᱦᱟᱹ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",

      fe_t2_step: "ᱠᱟᱹᱢᱤ ᱒ / ᱔: ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱵᱟᱪᱷᱟᱣ",
      fe_t2_badge: "ᱥᱟᱯᱟᱵ ᱟᱨ ᱤᱬᱤᱡ (Equipment)",
      fe_t2_title: "ᱵᱤᱡᱽᱞᱤ ᱥᱩᱭᱤᱪᱜᱤᱭᱟᱨ ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ",
      fe_t2_scenario: "᱔᱑᱕V ᱚᱛ ᱞᱟᱛᱟᱨ ᱵᱤᱡᱽᱞᱤ ᱯᱮᱱᱮᱞ ᱨᱮ ᱥᱮᱸᱜᱮᱞ ᱞᱟᱜᱟᱣ ᱟᱠᱟᱱᱟ᱾ AR ᱨᱮ ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱥᱟᱯᱟᱵ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      fe_t2_marker_label: "᱔᱑᱕V ᱥᱩᱭᱤᱪᱜᱤᱭᱟᱨ ᱥᱮᱸᱜᱮᱞ",
      fe_t2_marker_tel: "ᱵᱤᱡᱽᱞᱤ: ᱔᱑᱕V ᱟᱨᱠ • ᱠᱞᱟᱥ C ᱥᱮᱸᱜᱮᱞ • ᱞᱚᱞᱚ: 420°C",
      fe_t2_opt_a: "ᱠᱞᱟᱥ A: ᱫᱟᱜ ᱯᱨᱮᱥᱟᱨ ᱡᱮᱴ",
      fe_t2_opt_b: "ᱠᱞᱟᱥ C / CO2 ᱵᱤᱱ-ᱵᱤᱡᱽᱞᱤ ᱤᱬᱤᱡ ᱥᱟᱯᱟᱵ",
      fe_t2_opt_c: "AFFF ᱯᱷᱳᱢ ᱥᱟᱯᱟᱵ",
      fe_t2_correct_fb: "ᱥᱟᱹᱨᱤ ᱜᱮᱭᱟ! ᱵᱤᱱ-ᱵᱤᱡᱽᱞᱤ CO2 ᱜᱮᱥ ᱫᱚ ᱵᱤᱡᱽᱞᱤ ᱥᱚᱠ ᱵᱤᱱᱟᱹ ᱛᱮ ᱥᱮᱸᱜᱮᱞ ᱮ ᱤᱬᱤᱡ ᱮᱫᱟ᱾",
      fe_t2_incorrect_fb: "ᱟᱹᱰᱤ ᱵᱚᱛᱚᱨ! ᱫᱟᱜ ᱟᱨ ᱯᱷᱳᱢ ᱫᱚ ᱵᱤᱡᱽᱞᱤ ᱯᱟᱨᱚᱢ ᱠᱟᱛᱮ ᱜᱩᱡᱩᱜ ᱞᱮᱠᱟ ᱥᱚᱠ ᱮᱢ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾",

      fe_t3_step: "ᱠᱟᱹᱢᱤ ᱓ / ᱔: ᱦᱚᱭ-ᱫᱷᱩᱶᱟᱹ ᱥᱟᱸᱵᱽᱲᱟᱣ",
      fe_t3_badge: "ᱫᱷᱩᱶᱟᱹ ᱟᱴᱠᱟᱣ ᱱᱤᱭᱚᱢ",
      fe_t3_title: "ᱦᱚᱭ ᱰᱮᱢᱯᱟᱨ ᱯᱷᱞᱳ ᱠᱚᱱᱴᱨᱳᱞ",
      fe_t3_scenario: "ᱥᱩᱭᱤᱪᱜᱤᱭᱟᱨ ᱨᱮ ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱮᱱᱟ, ᱢᱮᱱᱠᱷᱟᱱ ᱵᱤᱥ CO ᱫᱷᱩᱶᱟᱹ ᱠᱟᱹᱢᱤ ᱦᱚᱨ ᱥᱮᱫ ᱪᱟᱞᱟᱜ ᱠᱟᱱᱟ᱾ ᱴᱷᱤᱠ ᱵᱷᱮᱱᱴᱤᱞᱮᱥᱚᱱ ᱠᱟᱹᱢᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      fe_t3_marker_label: "ᱰᱮᱢᱯᱟᱨ C-4 ᱡᱟᱸᱠᱥᱚᱱ",
      fe_t3_marker_tel: "CO ᱜᱮᱥ ᱯᱷᱞᱳ: 180 PPM • ᱵᱟᱭᱯᱟᱥ ᱵᱷᱟᱞᱵᱽ",
      fe_t3_opt_a: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱥᱟᱯᱷᱴ ᱥᱮᱫ ᱡᱚᱛᱚ ᱫᱩᱣᱟᱹᱨ ᱡᱷᱤᱡ ᱢᱮ",
      fe_t3_opt_b: "ᱫᱷᱩᱶᱟᱹ ᱵᱟᱦᱨᱮ ᱚᱰᱚᱠ ᱞᱟᱹᱜᱤᱫ ᱮᱢᱟᱨᱡᱮᱱᱥᱤ ᱵᱟᱭᱯᱟᱥ ᱰᱮᱢᱯᱟᱨ ᱪᱟᱹᱞᱩᱭ ᱢᱮ",
      fe_t3_opt_c: "ᱰᱮᱢᱯᱟᱨ ᱵᱟᱝ ᱥᱟᱡᱟᱣ ᱠᱟᱛᱮ ᱡᱚᱛᱚ ᱯᱷᱮᱱ ᱵᱚᱱᱫᱽ ᱢᱮ",
      fe_t3_correct_fb: "ᱥᱟᱹᱨᱤ ᱜᱮᱭᱟ! ᱮᱢᱟᱨᱡᱮᱱᱥᱤ ᱵᱟᱭᱯᱟᱥ ᱫᱚ ᱵᱤᱥ ᱜᱮᱥ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱠᱷᱚᱱ ᱥᱟᱺᱜᱤᱧ ᱵᱟᱦᱨᱮ ᱚᱰᱚᱠ ᱜᱤᱰᱤᱭᱟᱭ᱾",
      fe_t3_incorrect_fb: "ᱵᱟᱝ ᱴᱷᱤᱠ! ᱫᱩᱣᱟᱹᱨ ᱡᱷᱤᱡ ᱥᱮ ᱯᱷᱮᱱ ᱵᱚᱱᱫᱽ ᱞᱮᱠᱷᱟᱱ ᱵᱤᱥ ᱜᱮᱥ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱴᱷᱮᱱ ᱯᱟᱥᱱᱟᱣᱜᱼᱟ᱾",

      fe_t4_step: "ᱠᱟᱹᱢᱤ ᱔ / ᱔: ᱚᱰᱚᱠᱚᱜ ᱟᱨ DGMS ᱱᱤᱭᱚᱢ",
      fe_t4_badge: "DGMS ᱚᱰᱚᱠᱚᱜ ᱱᱤᱭᱚᱢ",
      fe_t4_title: "ᱮᱢᱟᱨᱡᱮᱱᱥᱤ ᱯᱟᱣᱟᱨ ᱵᱚᱱᱫᱽ ᱟᱨ ᱢᱟᱥᱴᱟᱨ ᱯᱚᱭᱮᱱᱴ",
      fe_t4_scenario: "ᱥᱮᱠᱴᱚᱨ C-4 ᱠᱷᱚᱱ ᱢᱩᱪᱟᱹᱫ ᱚᱰᱚᱠᱚᱜ ᱞᱟᱹᱠᱛᱤᱭᱟ᱾ ᱡᱟᱭᱜᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱮᱠᱷᱟ ᱞᱟᱹᱜᱤᱫ DGMS ᱱᱤᱭᱚᱢ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      fe_t4_marker_label: "LOTO ᱵᱤᱡᱽᱞᱤ ᱯᱮᱱᱮᱞ",
      fe_t4_marker_tel: "ᱵᱽᱨᱮᱠᱟᱨ ᱞᱚᱠᱟᱣᱩᱴ • ᱢᱟᱥᱴᱟᱨ ᱯᱚᱭᱮᱱᱴ ᱪᱟᱹᱞᱩ",
      fe_t4_opt_a: "ᱵᱤᱡᱽᱞᱤ ᱪᱟᱹᱞᱩ ᱫᱚᱦᱚ ᱠᱟᱛᱮ ᱮᱠᱞᱟ ᱜᱮ ᱞᱚᱜᱚᱱ ᱚᱰᱚᱠᱚᱜ ᱢᱮ",
      fe_t4_opt_b: "ᱢᱩᱬᱩᱛ ᱮᱢᱟᱨᱡᱮᱱᱥᱤ ᱵᱤᱡᱽᱞᱤ (LOTO) ᱵᱚᱱᱫᱽ ᱢᱮ, ᱜᱟᱫᱮᱞ ᱦᱚᱲ ᱞᱮᱠᱷᱟ ᱢᱮ ᱟᱨ ᱪᱮᱛᱟᱱ ᱢᱟᱥᱴᱟᱨ ᱯᱚᱭᱮᱱᱴ ᱛᱮ ᱪᱟᱞᱟᱜ ᱢᱮ",
      fe_t4_opt_c: "ᱥᱟᱭᱨᱮᱱ ᱛᱷᱩᱠᱟᱹᱢᱚᱜ ᱢᱟᱬᱟᱝ ᱱᱤᱡᱮᱨᱟᱜ ᱥᱟᱢᱟᱱ ᱤᱫᱤ ᱞᱟᱹᱜᱤᱫ ᱮᱠᱞᱟ ᱵᱚᱞᱚᱱ ᱢᱮ",
      fe_t4_correct_fb: "ᱟᱹᱰᱤ ᱱᱟᱯᱟᱭ! ᱵᱤᱡᱽᱞᱤ LOTO ᱵᱚᱱᱫᱽ, ᱦᱚᱲ ᱞᱮᱠᱷᱟ ᱟᱨ ᱢᱟᱥᱴᱟᱨ ᱯᱚᱭᱮᱱᱴ ᱨᱤᱯᱳᱨᱴ ᱫᱚ ᱑᱐᱐% DGMS ᱱᱤᱭᱚᱢ ᱯᱩᱨᱟᱹᱣ ᱮᱫᱟ᱾",
      fe_t4_incorrect_fb: "ᱟᱹᱰᱤ ᱢᱟᱨᱟᱝ ᱵᱷᱩᱞ! DGMS ᱱᱤᱭᱚᱢ ᱞᱮᱠᱟᱛᱮ ᱵᱤᱡᱽᱞᱤ ᱵᱚᱱᱫᱽ, ᱵᱚᱞᱚᱱ ᱵᱟᱨᱚᱱ ᱟᱨ ᱦᱚᱲ ᱞᱮᱠᱷᱟ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",

      // Module 2: Gas Leak & Confined Space Tasks (4 Tasks)
      gl_t1_step: "ᱠᱟᱹᱢᱤ ᱑ / ᱔: ᱜᱮᱥ ᱡᱟᱭᱜᱟ ᱪᱤᱱᱦᱟᱹᱣ",
      gl_t1_badge: "AR ᱵᱤᱥ ᱢᱮᱯᱤᱝ",
      gl_t1_title: "ᱵᱤᱥ ᱜᱮᱥ ᱥᱤᱢᱟᱹ ᱪᱤᱱᱦᱟᱹᱣ",
      gl_t1_scenario: "ᱰᱨᱤᱯᱷᱴ ᱓ ᱨᱮ H2S ᱜᱮᱥ ᱓᱕ PPM ᱨᱮ ᱟᱞᱟᱨᱢ ᱵᱟᱡᱟᱣ ᱮᱱᱟ᱾ AR ᱛᱮ ᱧᱮᱞ ᱠᱟᱛᱮ ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱥᱤᱢᱟᱹ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      gl_t1_marker_label: "H₂S ᱜᱮᱥ (ᱰᱨᱤᱯᱷᱴ ᱓)",
      gl_t1_marker_tel: "H₂S: ᱓᱕ PPM (ᱵᱚᱛᱚᱨ ᱥᱤᱢᱟᱹ: ᱑᱐ PPM) • O₂: ᱑᱘.᱒% ᱠᱚᱢ",
      gl_t1_opt_a: "ᱰᱨᱤᱯᱷᱴ ᱓ ᱞᱟᱛᱟᱨ ᱠᱷᱟᱫᱟᱱ (᱓᱕ PPM H2S - ᱵᱤᱥ ᱜᱮᱥ ᱡᱟᱢᱟ ᱡᱟᱭᱜᱟ)",
      gl_t1_opt_b: "ᱤᱱᱴᱮᱠ ᱮᱭᱟᱨᱣᱮ ᱪᱮᱛᱟᱱ ᱯᱳᱥᱴ (᱐ PPM H2S - ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱡᱟᱭᱜᱟ)",
      gl_t1_opt_c: "ᱨᱤᱴᱟᱨᱱ ᱮᱭᱟᱨᱣᱮ ᱰᱟᱠᱴ (᱒᱒ PPM - ᱵᱤᱥ ᱚᱰᱚᱠᱚᱜ ᱦᱚᱭ)",
      gl_t1_correct_fb: "ᱥᱟᱹᱨᱤ ᱜᱮᱭᱟ! ᱪᱮᱛᱟᱱ ᱤᱱᱴᱮᱠ ᱦᱚᱨ ᱫᱚ ᱐ PPM ᱵᱤᱥ ᱵᱤᱱᱟᱹ ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱮᱢᱚᱜ ᱠᱟᱱᱟ᱾",
      gl_t1_incorrect_fb: "ᱟᱹᱰᱤ ᱵᱚᱛᱚᱨ! ᱞᱟᱛᱟᱨ ᱟᱨ ᱨᱤᱴᱟᱨᱱ ᱰᱟᱠᱴ ᱨᱮ ᱵᱚᱛᱚᱨᱟᱱ ᱵᱤᱥ H2S ᱜᱮᱥ ᱢᱮᱱᱟᱜᱼᱟ᱾",

      gl_t2_step: "ᱠᱟᱹᱢᱤ ᱒ / ᱔: PPE ᱥᱟᱯᱟᱵ ᱵᱟᱪᱷᱟᱣ",
      gl_t2_badge: "ᱥᱟᱦᱮᱫ PPE ᱱᱤᱭᱚᱢ",
      gl_t2_title: "ᱥᱟᱦᱮᱫ ᱡᱤᱣᱤ-ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱟᱯᱟᱵ",
      gl_t2_scenario: "ᱦᱚᱭ ᱨᱮ ᱚᱠᱥᱤᱡᱮᱱ ᱑᱘.᱑% ᱢᱮᱱᱟᱜᱼᱟ ᱟᱨ ᱵᱤᱥ H2S ᱜᱮᱥ ᱢᱮᱱᱟᱜᱼᱟ᱾ AR ᱨᱮ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱥᱟᱦᱮᱫ ᱥᱟᱯᱟᱵ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      gl_t2_marker_label: "ᱚᱠᱥᱤᱡᱮᱱ-ᱠᱚᱢ ᱡᱟᱭᱜᱟ",
      gl_t2_marker_tel: "O₂ ᱞᱮᱵᱷᱮᱞ: ᱑᱘.᱑% (ᱟᱹᱰᱤ ᱠᱚᱢ) • SCBA ᱡᱟᱭᱜᱟ",
      gl_t2_opt_a: "N95 ᱫᱷᱩᱲᱤ ᱢᱟᱥᱠ (ᱥᱩᱢᱩᱝ ᱫᱷᱩᱲᱤ ᱟᱴᱠᱟᱣᱟᱭ, ᱚᱠᱥᱤᱡᱮᱱ ᱵᱟᱹᱱᱩᱜᱼᱟ)",
      gl_t2_opt_b: "ᱯᱚᱡᱤᱴᱤᱵᱷ-ᱯᱨᱮᱥᱟᱨ SCBA ᱥᱟᱦᱮᱫ ᱥᱤᱞᱤᱱᱰᱟᱨ (SCBA 300 Bar)",
      gl_t2_opt_c: "ᱦᱟᱯᱷ-ᱯᱷᱮᱥ ᱠᱟᱨᱴᱨᱤᱡᱽ (ᱚᱠᱥᱤᱡᱮᱱ ᱠᱚᱢ ᱨᱮ ᱵᱟᱭ ᱠᱟᱹᱢᱤᱭᱟ)",
      gl_t2_correct_fb: "ᱥᱟᱹᱨᱤ ᱜᱮᱭᱟ! ᱚᱠᱥᱤᱡᱮᱱ ᱠᱚᱢ (<᱑᱙.᱕%) ᱟᱨ ᱵᱤᱥ ᱡᱟᱭᱜᱟ ᱨᱮ DGMS ᱱᱤᱭᱚᱢ ᱞᱮᱠᱟᱛᱮ SCBA ᱜᱮ ᱞᱟᱜᱟᱣ ᱞᱟᱹᱠᱛᱤᱭᱟ᱾",
      gl_t2_incorrect_fb: "ᱟᱹᱰᱤ ᱢᱟᱨᱟᱝ ᱵᱷᱩᱞ! ᱫᱷᱩᱲᱤ ᱢᱟᱥᱠ ᱫᱚ ᱚᱠᱥᱤᱡᱮᱱ ᱵᱟᱭ ᱮᱢᱚᱜᱼᱟ, ᱡᱟᱦᱟᱸ ᱛᱮ ᱞᱚᱜᱚᱱ ᱥᱟᱦᱮᱫ ᱟᱴᱠᱟᱣ ᱠᱟᱛᱮ ᱜᱩᱡᱩᱜ ᱨᱮᱱᱟᱜ ᱵᱚᱛᱚᱨ ᱛᱟᱦᱮᱸᱱᱟ᱾",

      gl_t3_step: "ᱠᱟᱹᱢᱤ ᱓ / ᱔: ᱦᱚᱭ-ᱜᱮᱥ ᱯᱚᱨᱠᱷᱟᱣ",
      gl_t3_badge: "ᱥᱟᱸᱜᱤᱧ ᱡᱟᱭᱜᱟ ᱜᱮᱥ ᱯᱚᱨᱠᱷᱟᱣ",
      gl_t3_title: "ᱪᱮᱛᱟᱱ-ᱞᱟᱛᱟᱨ ᱜᱮᱥ ᱯᱚᱨᱠᱷᱟᱣ",
      gl_t3_scenario: "ᱞᱟᱛᱟᱨ ᱴᱮᱸᱠᱤ ᱨᱮ ᱵᱚᱞᱚᱱ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱯᱲᱟᱣ᱾ ᱜᱮᱥ ᱠᱚ ᱦᱟᱢᱟᱞ-ᱨᱟᱣᱟᱞ ᱞᱮᱠᱟᱛᱮ ᱞᱟᱛᱟᱨ-ᱪᱮᱛᱟᱱ ᱛᱟᱦᱮᱸᱱᱟ᱾ ᱴᱷᱤᱠ ᱯᱚᱨᱠᱷᱟᱣ ᱦᱚᱨ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      gl_t3_marker_label: "ᱥᱟᱢᱯ ᱵᱚᱞᱚᱱ ᱦᱚᱨ",
      gl_t3_marker_tel: "ᱜᱟᱹᱦᱤᱨ: 4.5m • ᱪᱮᱛᱟᱱ (CH₄) / ᱛᱟᱞᱟ (CO) / ᱞᱟᱛᱟᱨ (H₂S/O₂)",
      gl_t3_opt_a: "ᱥᱩᱢᱩᱝ ᱪᱮᱛᱟᱱ ᱦᱚᱭ ᱜᱮ ᱢᱤᱫᱴᱟᱝ ᱜᱮᱥ ᱢᱤᱴᱟᱨ ᱛᱮ ᱯᱚᱨᱠᱷᱟᱣ ᱢᱮ",
      gl_t3_opt_b: "᱓ ᱛᱷᱚᱠ ᱨᱮ ᱔-ᱜᱮᱥ ᱯᱚᱨᱠᱷᱟᱣ: ᱪᱮᱛᱟᱱ (CH4), ᱛᱟᱞᱟ (CO), ᱟᱨ ᱞᱟᱛᱟᱨ (H2S/O2) ᱞᱮᱛᱟᱲ ᱢᱤᱴᱟᱨ ᱛᱮ",
      gl_t3_opt_c: "ᱵᱤᱱ-ᱴᱷᱤᱠ ᱢᱤᱴᱟᱨ ᱛᱮ ᱵᱚᱞᱚᱱ ᱢᱟᱬᱟᱝ ᱥᱩᱢᱩᱝ ᱥᱩᱸᱜᱷᱟᱹᱣ ᱠᱟᱛᱮ ᱧᱮᱞ ᱢᱮ",
      gl_t3_correct_fb: "ᱥᱟᱹᱨᱤ ᱜᱮᱭᱟ! ᱪᱮᱛᱟᱱ (CH4), ᱛᱟᱞᱟ (CO) ᱟᱨ ᱞᱟᱛᱟᱨ (H2S) ᱡᱚᱛᱚ ᱛᱷᱚᱠ ᱨᱮ ᱯᱚᱨᱠᱷᱟᱣ ᱵᱤᱱᱟᱹ ᱵᱚᱞᱚᱱ ᱵᱟᱝ ᱜᱟᱱᱚᱜᱼᱟ᱾",
      gl_t3_incorrect_fb: "ᱵᱚᱛᱚᱨᱟᱱ! H2S ᱜᱮᱥ ᱫᱚ ᱥᱩᱸᱜᱷᱟᱹᱣ ᱫᱟᱲᱮ ᱞᱚᱜᱚᱱ ᱵᱚᱱᱫᱽ ᱜᱤᱰᱤᱭᱟᱭ᱾ ᱢᱤᱫ ᱛᱷᱚᱠ ᱯᱚᱨᱠᱷᱟᱣ ᱛᱮ ᱞᱟᱛᱟᱨ ᱵᱤᱥ ᱵᱟᱝ ᱵᱟᱰᱟᱭᱚᱜᱼᱟ᱾",

      gl_t4_step: "ᱠᱟᱹᱢᱤ ᱔ / ᱔: ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ ᱱᱤᱭᱚᱢ",
      gl_t4_badge: "ᱥᱟᱸᱜᱤᱧ ᱡᱟᱭᱜᱟ ᱵᱟᱧᱪᱟᱣ ᱨᱤᱜᱽ",
      gl_t4_title: "ᱞᱟᱭᱤᱯᱷᱞᱟᱭᱤᱱ ᱴᱨᱟᱭᱯᱚᱰ ᱟᱨ ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ",
      gl_t4_scenario: "ᱴᱮᱸᱠᱤ ᱨᱮ ᱵᱚᱞᱚᱱ ᱮᱛᱚᱦᱚᱵ ᱠᱟᱱᱟ᱾ DGMS ᱱᱤᱭᱚᱢ ᱞᱮᱠᱟᱛᱮ ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ ᱟᱨ ᱢᱮᱠᱟᱱᱤᱠᱟᱞ ᱴᱨᱟᱭᱯᱚᱰ ᱵᱟᱧᱪᱟᱣ ᱦᱚᱨ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      gl_t4_marker_label: "ᱵᱟᱧᱪᱟᱣ ᱴᱨᱟᱭᱯᱚᱰ & ᱥᱮᱱᱴᱨᱤ",
      gl_t4_marker_tel: "ᱢᱮᱠᱟᱱᱤᱠᱟᱞ ᱣᱤᱧᱪ ᱞᱚᱠ • ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ",
      gl_t4_opt_a: "ᱠᱚᱢᱚᱨ ᱨᱮ ᱫᱟᱣᱲᱟ ᱛᱚᱞ ᱠᱟᱛᱮ ᱮᱠᱞᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱵᱚᱞᱚᱱ",
      gl_t4_opt_b: "ᱯᱩᱨᱟᱹ-ᱦᱚᱲᱢᱚ ᱦᱟᱨᱱᱮᱥ ᱥᱟᱶ ᱴᱨᱟᱭᱯᱚᱰ ᱢᱮᱠᱟᱱᱤᱠᱟᱞ ᱣᱤᱧᱪ ᱟᱨ ᱵᱟᱦᱨᱮ ᱨᱮ ᱴᱨᱮᱱᱰ ᱥᱮᱱᱴᱨᱤ",
      gl_t4_opt_c: "ᱪᱮᱛᱟᱱ ᱨᱮ ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ ᱵᱤᱱᱟᱹ ᱵᱟᱨᱭᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱢᱤᱫ ᱥᱟᱶ ᱵᱚᱞᱚᱱ",
      gl_t4_correct_fb: "ᱟᱹᱰᱤ ᱱᱟᱯᱟᱭ! ᱯᱩᱨᱟᱹ ᱦᱟᱨᱱᱮᱥ, ᱴᱨᱟᱭᱯᱚᱰ ᱣᱤᱧᱪ ᱟᱨ ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ ᱫᱚ ᱞᱚᱜᱚᱱ ᱵᱟᱧᱪᱟᱣ ᱮ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾",
      gl_t4_incorrect_fb: "ᱟᱹᱰᱤ ᱢᱟᱨᱟᱝ ᱵᱷᱩᱞ! DGMS ᱱᱤᱭᱚᱢ ᱞᱮᱠᱟᱛᱮ ᱵᱟᱦᱨᱮ ᱥᱮᱱᱴᱨᱤ ᱟᱨ ᱴᱨᱟᱭᱯᱚᱰ ᱵᱤᱱᱟᱹ ᱵᱚᱞᱚᱱ ᱢᱩᱴᱷᱮ ᱵᱟᱝ ᱜᱟᱱᱚᱜᱼᱟ᱾",

      // Retake Screen & Status
      tag_retake_required: "ᱫᱚᱦᱲᱟ ᱮᱢ ᱞᱟᱹᱠᱛᱤᱭᱟ (Retake Required)",
      failed_result_title: "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱢᱟᱱᱚᱠ ᱵᱟᱝ ᱯᱩᱨᱟᱹᱣ ᱞᱮᱱᱟ",
      failed_result_sub: "DGMS ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱞᱟᱹᱜᱤᱫ ᱗᱕% ᱢᱟᱨᱠᱥ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",
      lbl_correct_answers: "ᱥᱟᱹᱨᱤ ᱩᱛᱟᱹᱨ:",
      lbl_pass_threshold: "ᱯᱟᱥ ᱥᱤᱢᱟᱹ:",
      lbl_audit_status: "ᱚᱰᱤᱴ ᱛᱟᱦᱮᱸᱱ:",
      badge_status_retake: "ᱫᱚᱦᱲᱟ ᱮᱢ • ᱮᱰᱢᱤᱱ ᱨᱮ ᱚᱞ ᱮᱱᱟ",
      failed_remediation_note: "ᱵᱚᱛᱚᱨ ᱪᱤᱱᱦᱟᱹ ᱠᱚ ᱫᱚᱦᱲᱟ ᱧᱮᱞ ᱢᱮ, ᱦᱚᱭ-ᱫᱷᱩᱶᱟᱹ ᱟᱨ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱱᱤᱭᱚᱢ ᱵᱟᱰᱟᱭ ᱠᱟᱛᱮ ᱫᱚᱦᱲᱟ ᱢᱚᱰᱩᱞ ᱮᱦᱚᱵ ᱢᱮ᱾",
      btn_retake_module: "ᱴᱨᱮᱱᱤᱝ ᱢᱚᱰᱩᱞ ᱫᱚᱦᱲᱟ ᱮᱦᱚᱵ ᱢᱮ",
      th_worker_training_status: "AR ᱨᱩᱠᱷᱤᱭᱟᱹ ᱛᱟᱦᱮᱸᱱ",
      status_not_attempted: "ᱵᱟᱝ ᱵᱤᱰᱟᱹᱣ ᱟᱠᱟᱱ",
      status_certified: "ᱥᱟᱨᱴᱤᱯᱷᱟᱭᱤᱰ",
      status_retake: "ᱫᱚᱦᱲᱟ ᱮᱢ",
      txt_tasks_count: "4 ᱨᱮ {correct} ᱠᱟᱹᱢᱤ",
      
      modal_reg_kicker: "ᱮᱰᱢᱤᱱ ᱯᱚᱨᱴᱟᱞ • ᱠᱟᱹᱨᱜᱟᱲ ᱚᱞ",
      modal_reg_title: "ᱠᱟᱹᱨᱜᱟᱲ ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ",
      lbl_next_id: "ᱞᱟᱦᱟᱱᱛᱤ ID:",
      reg_tip_content: "KawachAR ᱫᱚ ᱠᱟᱹᱨᱜᱟᱲ ᱠᱚ ᱥᱚᱡᱷᱮ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱢᱳᱵᱟᱭᱤᱞ ᱥᱟᱶ ᱡᱚᱲᱟᱣ ᱠᱟᱛᱮ AR ᱨᱩᱠᱷᱤᱭᱟᱹ ᱮᱢᱟᱭ᱾",
      err_correct_fields: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱪᱤᱱᱦᱟᱹ ᱟᱠᱟᱱ ᱡᱟᱭᱜᱟ ᱥᱩᱫᱷᱨᱟᱹᱣ ᱢᱮ:",
      err_correct_fields_sub: "ᱡᱚᱛᱚ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱡᱟᱭᱜᱟ ᱯᱮᱨᱮᱡ ᱢᱮ ᱟᱨ ᱠᱚᱢ ᱠᱷᱚᱱ ᱠᱚᱢ ᱢᱤᱫ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      sec1_title: "ᱠᱟᱹᱨᱜᱟᱲ ᱟᱨ ᱟᱹᱭᱤᱱ ᱵᱤᱵᱚᱨᱚᱱ",
      sec1_desc: "ᱠᱟᱹᱨᱜᱟᱲ ᱧᱩᱛᱩᱢ, ᱦᱟᱹᱴᱤᱧ ᱟᱨ ᱴᱷᱟᱶ ᱚᱞ ᱢᱮ",
      lbl_org_name: "ᱠᱟᱹᱨᱜᱟᱲ / ᱯᱷᱮᱠᱴᱨᱤ ᱧᱩᱛᱩᱢ",
      ph_org_name: "ᱡᱮᱞᱮᱠᱟ: Bharat Mining & Minerals Corp. Unit #4",
      err_org_name: "ᱠᱟᱹᱨᱜᱟᱲ ᱧᱩᱛᱩᱢ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",
      lbl_industry_type: "ᱠᱟᱹᱨᱜᱟᱲ ᱦᱟᱹᱴᱤᱧ",
      opt_select_industry: "ᱠᱟᱹᱨᱜᱟᱲ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ...",
      ind_mining: "ᱠᱷᱟᱫᱟᱱ (Mining - Open-cast / Underground)",
      ind_steel: "ᱤᱥᱯᱟᱛ (Steel - Smelting / Rolling)",
      ind_mfg: "ᱢᱮᱥᱤᱱ ᱵᱮᱱᱟᱣ (Heavy Manufacturing)",
      ind_mica: "ᱚᱵᱷᱨᱚᱠ / ᱢᱟᱭᱠᱟ (Mica Processing)",
      err_industry_type: "ᱠᱟᱹᱨᱜᱟᱲ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      lbl_facility_location: "ᱠᱟᱹᱨᱜᱟᱲ ᱴᱷᱟᱶ / ᱴᱷᱤᱠᱬᱟᱹ",
      ph_location: "ᱡᱮᱞᱮᱠᱟ: ᱫᱷᱟᱱᱵᱟᱫᱽ ᱠᱷᱟᱫᱟᱱ ᱴᱚᱴᱷᱟ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
      err_location: "ᱴᱷᱟᱶ ᱚᱞ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",
      
      lbl_reg_type: "ᱚᱞ ᱠᱟᱜᱚᱡᱽ ᱦᱟᱹᱴᱤᱧ (Registration Type)",
      reg_choice_licence_title: "ᱞᱟᱭᱥᱮᱱᱥ / ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ ᱱᱚᱢᱵᱚᱨ",
      reg_choice_licence_sub: "Factory Licence, Mining Lease ᱥᱮ DGMS No.",
      reg_choice_udyam_title: "Udyam ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ ᱱᱚᱢᱵᱚᱨ",
      reg_choice_udyam_sub: "MSME ᱠᱟᱹᱨᱜᱟᱲ ᱩᱫᱽᱭᱚᱢ ᱱᱚᱢᱵᱚᱨ",
      lbl_reg_doc_licence: "ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱞᱟᱭᱥᱮᱱᱥ / ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ ᱱᱚᱢᱵᱚᱨ",
      ph_reg_licence: "ᱡᱮᱞᱮᱠᱟ: DGMS/MIN/2024/8892 ᱥᱮ ᱡᱟᱦᱟᱸᱱ ᱑᱐-ᱮᱞ ᱱᱚᱢᱵᱚᱨ",
      hint_reg_licence: "ᱞᱟᱭᱥᱮᱱᱥ ᱱᱚᱢᱵᱚᱨ ᱥᱮ ᱰᱮᱢᱳ ᱞᱟᱹᱜᱤᱫ ᱑᱐-ᱮᱞ ᱱᱚᱢᱵᱚᱨ",
      lbl_reg_doc_udyam: "Udyam ᱨᱮᱡᱤᱥᱴᱨᱮᱥᱚᱱ ᱱᱚᱢᱵᱚᱨ (MSME)",
      ph_reg_udyam: "ᱡᱮᱞᱮᱠᱟ: UDYAM-JH-02-0049281 ᱥᱮ ᱑᱐-ᱮᱞ ᱱᱚᱢᱵᱚᱨ",
      hint_reg_udyam: "UDYAM ᱯᱷᱚᱨᱢᱮᱴ ᱥᱮ ᱰᱮᱢᱳ ᱞᱟᱹᱜᱤᱫ ᱑᱐-ᱮᱞ ᱱᱚᱢᱵᱚᱨ",
      err_reg_doc_value: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱥᱟᱹᱨᱤ ᱱᱚᱢᱵᱚᱨ ᱥᱮ ᱑᱐-ᱮᱞ ᱚᱞ ᱢᱮ᱾",
      
      sec2_title: "ᱪᱟᱹᱞᱩ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ (Site Scope)",
      dept_of_selected: "ᱨᱮ ᱑᱕ ᱵᱟᱪᱷᱟᱣ ᱟᱠᱟᱱᱟ",
      sec2_desc: "ᱱᱚᱶᱟ ᱠᱟᱹᱨᱜᱟᱲ ᱨᱮ ᱪᱟᱹᱞᱩ ᱢᱮᱱᱟᱜ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱠᱚ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      lbl_custom_dept: "ᱮᱴᱟᱜ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱧᱩᱛᱩᱢ",
      err_select_dept: "ᱠᱚᱢ ᱠᱷᱚᱱ ᱠᱚᱢ ᱢᱤᱫ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      sec3_title: "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱯᱷᱤᱥᱟᱨ / ᱯᱞᱟᱱᱴ ᱮᱰᱢᱤᱱ",
      sec3_desc: "AR ᱪᱤᱨᱜᱟᱹᱞ ᱟᱨ DGMS ᱚᱰᱤᱴ ᱞᱟᱹᱜᱤᱫ ᱚᱯᱷᱤᱥᱟᱨ ᱵᱤᱵᱚᱨᱚᱱ",
      lbl_officer_name: "ᱚᱯᱷᱤᱥᱟᱨ / ᱮᱰᱢᱤᱱ ᱧᱩᱛᱩᱢ",
      err_officer_name: "ᱚᱯᱷᱤᱥᱟᱨ ᱧᱩᱛᱩᱢ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",
      lbl_contact_number: "ᱯᱷᱳᱱ ᱱᱚᱢᱵᱚᱨ",
      err_contact_number: "ᱥᱟᱹᱨᱤ ᱯᱷᱳᱱ ᱱᱚᱢᱵᱚᱨ ᱚᱞ ᱢᱮ᱾",
      lbl_official_email: "ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱤᱢᱮᱞ",
      err_official_email: "ᱥᱟᱹᱨᱤ ᱤᱢᱮᱞ ᱚᱞ ᱢᱮ᱾",
      modal_footer_note: "ᱡᱚᱛᱚ ᱚᱞ ᱛᱟᱭᱚᱢ ᱢᱤᱫ ᱥᱟᱹᱨᱤ KAW-ID ᱵᱮᱱᱟᱣᱜᱼᱟ",
      btn_cancel: "ᱵᱟᱹᱜᱤ (Cancel)",
      btn_register_gen_id: "ᱚᱞ ᱢᱮ ᱟᱨ KAW-ID ᱵᱮᱱᱟᱣ ᱢᱮ",
      
      modal_add_worker_kicker: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ • ᱮᱰᱢᱤᱱ",
      modal_add_worker_title: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱢᱮ",
      lbl_next_worker_id: "ᱞᱟᱦᱟᱱᱛᱤ ᱠᱟᱹᱢᱤᱭᱟᱹ ID:",
      add_worker_tip: "ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ Worker ID (EMP-XXXX) ᱫᱚ ᱠᱟᱹᱢᱤᱭᱟᱹᱣᱟᱜ ᱤᱭᱩᱡᱟᱨ ᱧᱩᱛᱩᱢ ᱠᱟᱱᱟ᱾ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱯᱟᱹᱦᱤᱞ ᱞᱚᱜᱤᱱ ᱡᱚᱠᱷᱟᱜ ᱯᱟᱥᱣᱟᱨᱰ ᱵᱮᱱᱟᱣᱟᱭ᱾",
      lbl_assigned_facility: "ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
      opt_select_facility_scope: "ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ...",
      err_select_facility: "ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      lbl_full_name: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱯᱩᱨᱟᱹ ᱧᱩᱛᱩᱢ",
      ph_worker_name: "ᱡᱮᱞᱮᱠᱟ: Ramesh Kumar Soren",
      err_worker_name: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱧᱩᱛᱩᱢ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",
      lbl_mobile_number: "ᱢᱳᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ",
      err_mobile_number: "᱑᱐-ᱮᱞ ᱢᱳᱵᱟᱭᱤᱞ ᱱᱚᱢᱵᱚᱨ ᱚᱞ ᱢᱮ᱾",
      lbl_residential_address: "ᱚᱲᱟᱜ ᱴᱷᱤᱠᱬᱟᱹ / ᱴᱚᱞᱟ",
      ph_worker_address: "ᱡᱮᱞᱮᱠᱟ: Quarter B-42, Mining Officers Colony, Dhanbad, Jharkhand",
      err_address: "ᱴᱷᱤᱠᱬᱟᱹ ᱚᱞ ᱞᱟᱹᱠᱛᱤ ᱜᱮᱭᱟ᱾",
      lbl_aadhaar_demo: "ᱟᱫᱷᱟᱨ ᱱᱚᱢᱵᱚᱨ (ᱰᱮᱢᱳ)",
      pill_demo_field: "ᱰᱮᱢᱳ ᱯᱷᱤᱞᱰ",
      hint_aadhaar_demo: "ᱰᱮᱢᱳ ᱞᱟᱹᱜᱤᱫ ᱩᱫᱩᱜ (ᱥᱟᱹᱨᱤ ᱵᱟᱝ ᱠᱟᱱᱟ)",
      lbl_assigned_depts: "ᱠᱟᱹᱢᱤ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱠᱚ",
      hint_select_facility_first: "ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱞᱳᱰ ᱞᱟᱹᱜᱤᱫ ᱪᱮᱛᱟᱱ ᱨᱮ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      err_select_worker_dept: "ᱠᱚᱢ ᱠᱷᱚᱱ ᱠᱚᱢ ᱢᱤᱫ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾",
      btn_enroll_generate_emp: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱢᱮ ᱟᱨ EMP-ID ᱵᱮᱱᱟᱣ ᱢᱮ",
      
      worker_enrolled_title: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱮᱞᱮᱫ ᱮᱱᱟᱭ!",
      worker_enrolled_subtitle: "ᱯᱟᱹᱦᱤᱞ ᱢᱳᱵᱟᱭᱤᱞ ᱞᱚᱜᱤᱱ ᱞᱟᱹᱜᱤᱫ ᱱᱚᱶᱟ ID ᱠᱟᱹᱢᱤᱭᱟᱹ ᱮᱢᱟᱭ ᱢᱮ᱾",
      lbl_worker_username: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱞᱚᱜᱤᱱ ᱤᱭᱩᱡᱟᱨ ᱧᱩᱛᱩᱢ",
      btn_copy: "ᱠᱚᱯᱤ ᱢᱮ",
      note_worker_first_login: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱢᱳᱵᱟᱭᱤᱞ ᱮᱯ ᱨᱮ ᱯᱟᱹᱦᱤᱞ ᱞᱚᱜᱤᱱ ᱡᱚᱠᱷᱟᱜ ᱯᱟᱥᱣᱟᱨᱰ ᱮ ᱵᱮᱱᱟᱣᱟ᱾",
      summary_worker_name: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱧᱩᱛᱩᱢ",
      summary_facility: "ᱠᱟᱹᱨᱜᱟᱲ",
      summary_mobile: "ᱢᱳᱵᱟᱭᱤᱞ",
      summary_assigned_depts: "ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ",
      btn_done: "ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ",
      
      facility_registered_title: "ᱠᱟᱹᱨᱜᱟᱲ ᱚᱞ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ!",
      facility_registered_subtitle: "ᱟᱢᱟᱜ ᱠᱟᱹᱨᱜᱟᱲ KawachAR ᱨᱩᱠᱷᱤᱭᱟᱹ ᱱᱮᱴᱣᱟᱨᱠ ᱨᱮ ᱥᱮᱞᱮᱫ ᱮᱱᱟ᱾",
      lbl_org_id: "ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ ᱠᱟᱹᱨᱜᱟᱲ ID",
      summary_industry: "ᱠᱟᱹᱨᱜᱟᱲ ᱦᱟᱹᱴᱤᱧ",
      summary_location: "ᱴᱷᱟᱶ",
      summary_document: "ᱞᱟᱭᱥᱮᱱᱥ / ᱚᱞ ᱱᱚᱢᱵᱚᱨ",
      summary_active_depts: "ᱪᱟᱹᱞᱩ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ",
      summary_admin: "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱯᱷᱤᱥᱟᱨ / ᱮᱰᱢᱤᱱ",
      
      // Shared Demo Dataset (Req 3 & 4)
      demo_org_name: "ᱵᱷᱟᱨᱚᱛ ᱢᱟᱭᱱᱤᱝ & ᱢᱤᱱᱟᱨᱟᱞᱥ ᱠᱚᱨᱯ ᱤᱭᱩᱱᱤᱴ #4",
      demo_org_location: "ᱫᱷᱟᱱᱵᱟᱫᱽ ᱠᱷᱟᱫᱟᱱ ᱴᱚᱴᱷᱟ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
      demo_admin_name: "ᱤᱸᱡᱤ. ᱨᱟᱡᱮᱥᱣᱚᱨ ᱵᱚᱨᱢᱟ",
      demo_worker_name: "ᱨᱟᱢᱮᱥ ᱠᱩᱢᱟᱨ ᱥᱚᱨᱮᱱ",
      demo_worker_address: "ᱠᱣᱟᱨᱴᱟᱨ B-42, ᱢᱟᱭᱱᱤᱝ ᱚᱯᱷᱤᱥᱚᱨᱥ ᱠᱚᱞᱚᱱᱤ, ᱫᱷᱟᱱᱵᱟᱫᱽ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
      toast_demo_facility_filled: "ᱰᱮᱢᱳ ᱠᱟᱹᱨᱜᱟᱲ ᱵᱤᱵᱚᱨᱚᱱ ᱯᱮᱨᱮᱡᱽ ᱮᱱᱟ᱾",
      toast_demo_worker_filled: "ᱰᱮᱢᱳ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱵᱤᱵᱚᱨᱚᱱ ᱯᱮᱨᱮᱡᱽ ᱮᱱᱟ᱾",
      toast_demo_login_filled: "ᱰᱮᱢᱳ ᱞᱚᱜᱤᱱ ᱵᱤᱵᱚᱨᱚᱱ ᱯᱮᱨᱮᱡᱽ ᱮᱱᱟ᱾",

      // AR and Certificate Audit
      tab_verify_cert: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱚᱨᱠᱷᱟ & ᱚᱰᱤᱴ",
      sec_verify_kicker: "DGMS ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱰᱤᱴ ᱤᱧᱡᱤᱱ",
      sec_verify_title: "QR ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱚᱨᱠᱷᱟ & ᱨᱮᱡᱤᱥᱴᱨᱤ",
      sec_verify_subtitle: "ᱰᱤᱡᱤᱴᱟᱞ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱟᱱᱛᱮᱭ ᱢᱮ ᱟᱨ ᱥᱟᱹᱨᱤ ᱜᱮ ᱪᱮᱠ ᱢᱮ᱾",
      verify_box_title: "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱚᱨᱠᱷᱟᱭ ᱢᱮ",
      verify_box_desc: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱜ QR ᱨᱮ ᱚᱞ ᱟᱠᱟᱱ ID ᱮᱢ ᱢᱮ (KAW-CERT-XXXXX)",
      ph_cert_lookup: "ᱡᱮᱞᱮᱠᱟ: KAW-CERT-84921",
      btn_verify_cert: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱚᱨᱠᱷᱟᱭ ᱢᱮ",
      lbl_recent_certs: "ᱱᱟᱦᱟᱜ ᱡᱟᱹᱨᱤ ᱟᱠᱟᱱ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ:",
      hint_no_issued_certs: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱟᱢ ᱞᱟᱹᱜᱤᱫ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱮᱯ ᱨᱮ ᱴᱨᱮᱱᱤᱝ ᱢᱚᱰᱩᱞ ᱯᱩᱨᱟᱹᱣ ᱢᱮ",
      title_issued_registry: "ᱡᱟᱹᱨᱤ ᱟᱠᱟᱱ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ (ᱚᱰᱤᱴ ᱞᱚᱜᱽ)",
      th_cert_id: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ID",
      th_worker_name: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱧᱩᱛᱩᱢ",
      th_worker_facility: "ᱠᱟᱹᱨᱜᱟᱲ",
      th_module_completed: "ᱯᱩᱨᱟᱹᱣ ᱟᱠᱟᱱ ᱢᱚᱰᱩᱞ",
      th_cert_score: "ᱥᱠᱳᱨ & ᱦᱟᱞᱚᱛ",
      th_issued_at: "ᱡᱟᱹᱨᱤ ᱢᱟᱹᱦᱤᱛ",
      th_cert_actions: "ᱠᱟᱹᱢᱤᱦᱚᱨᱟ",
      btn_start_module: "AR ᱢᱚᱰᱩᱞ ᱮᱛᱚᱦᱚᱵᱽ ᱢᱮ",
      btn_confirm_choice: "ᱵᱟᱪᱷᱟᱣ ᱯᱩᱨᱟᱹᱣ ᱢᱮ",
      btn_all_modules: "ᱥᱟᱱᱟᱢ ᱢᱚᱰᱩᱞ",
      cert_verified_tag: "DGMS ᱯᱚᱨᱠᱷᱟ ᱟᱠᱟᱱ",
      cert_doc_title: "ᱰᱤᱡᱤᱴᱟᱞ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱟᱥᱯᱳᱨᱴ",
      lbl_certified_module: "ᱯᱩᱨᱟᱹᱣ ᱢᱚᱰᱩᱞ:",
      lbl_final_score: "ᱢᱩᱪᱟᱹᱫ ᱥᱠᱳᱨ",
      cert_passed_status: "ᱯᱟᱥ ᱮᱱᱟ • ᱱᱤᱭᱚᱢ ᱢᱟᱱᱟᱣ",
      cert_digitally_signed: "ᱰᱤᱡᱤᱴᱟᱞ ᱥᱩᱦᱤ & ᱥᱤᱞ",
      btn_return_modules: "ᱴᱨᱮᱱᱤᱝ ᱢᱚᱰᱩᱞ ᱛᱮ ᱨᱩᱣᱟᱹᱲ ᱢᱮ",
      btn_verify_in_admin: "ᱮᱰᱢᱤᱱ ᱯᱚᱨᱴᱟᱞ ᱨᱮ ᱯᱚᱨᱠᱷᱟᱭ ᱢᱮ",
      ar_scan_init: "AR ᱤᱧᱡᱤᱱ ᱮᱦᱚᱵᱚᱜ ᱠᱟᱱᱟ...",
      lbl_sim_feed: "ᱥᱤᱢᱩᱞᱮᱴᱮᱰ AR ᱠᱮᱢᱨᱟ ᱯᱷᱤᱰ",
      btn_view_cert: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ",
      btn_view_slip: "ᱥᱞᱤᱯ ᱧᱮᱞ",
      btn_verify: "ᱯᱚᱨᱠᱷᱟᱭ ᱢᱮ",
      admin_cert_modal_kicker: "DGMS ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱚᱨᱢᱟᱬ",
      admin_cert_modal_title: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ",
      admin_cert_modal_subtitle: "DGMS ᱰᱤᱡᱤᱴᱟᱞ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱥᱟᱹᱵᱩᱫ",
      btn_view_in_audit: "ᱚᱰᱤᱴ ᱤᱧᱡᱤᱱ ᱨᱮ ᱧᱮᱞ",

      // Missing Table Headers & Cert Details
      th_score_pct: "ᱥᱠᱳᱨ %",
      th_issue_date: "ᱡᱟᱹᱨᱤ ᱢᱟᱹᱦᱤᱛ & ᱚᱠᱛᱚ",
      th_verification_status: "ᱯᱚᱨᱠᱷᱟ ᱦᱟᱞᱚᱛ",
      empty_certs_title: "ᱱᱤᱛ ᱫᱷᱟᱹᱵᱤᱡ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱵᱟᱝ ᱚᱞ ᱟᱠᱟᱱᱟ",
      empty_certs_desc: "DGMS ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱞᱟᱹᱜᱤᱫ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱮᱯ ᱨᱮ ᱴᱨᱮᱱᱤᱝ ᱯᱩᱨᱟᱹᱣ ᱢᱮ᱾",
      badge_coming_soon: "ᱫᱟᱨᱟᱭ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ ᱨᱮ",
      mod_machinery_tag: "ᱢᱚᱰᱩᱞ ᱐᱓ • ᱢᱟᱨᱟᱝ ᱢᱮᱥᱤᱱ",
      mod_machinery_title: "HEMM ᱞᱟᱹᱰᱩ ᱴᱨᱟᱠ ᱵᱞᱟᱭᱤᱱᱰ-ᱥᱯᱳᱴ",
      mod_machinery_desc: "ᱢᱳᱵᱟᱭᱤᱞ ᱠᱮᱢᱮᱨᱟ ᱛᱮ ᱰᱨᱟᱭᱵᱷᱟᱨᱟᱜ ᱵᱟᱝ ᱧᱮᱞᱚᱜ ᱡᱟᱭᱜᱟ ᱧᱮᱞ ᱢᱮ᱾",
      lbl_disabled_mod: "ᱢᱚᱰᱩᱞ (ᱞᱚᱠ ᱢᱮᱱᱟᱜᱼᱟ)",
      mod_electrical_tag: "ᱢᱚᱰᱩᱞ ᱐᱔ • ᱵᱤᱡᱽᱞᱤ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod_electrical_title: "ᱦᱟᱭ-ᱵᱷᱳᱞᱴᱮᱡᱽ ᱥᱟᱵᱽᱥᱴᱮᱥᱚᱱ ᱟᱨᱠ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod_electrical_desc: "᱓᱓kV ᱵᱤᱡᱽᱞᱤ ᱠᱷᱚᱱ ᱥᱟᱺᱜᱤᱧ ᱛᱟᱦᱮᱸᱱ ᱨᱮᱱᱟᱜ ᱱᱤᱭᱚᱢ᱾",
      mod_ppe_tag: "ᱢᱚᱰᱩᱞ ᱐᱕ • PPE ᱟᱨ ᱧᱩᱨᱩᱜ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod_ppe_title: "ᱪᱮᱛᱟᱱ ᱨᱮ ᱠᱟᱹᱢᱤ ᱟᱨ ᱦᱟᱨᱱᱮᱥ ᱨᱩᱠᱷᱤᱭᱟᱹ",
      mod_ppe_desc: "ᱧᱩᱨᱩᱜ ᱠᱷᱚᱱ ᱵᱟᱧᱪᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱦᱟᱨᱱᱮᱥ ᱯᱚᱨᱠᱷᱟᱣ᱾",
      lbl_cert_id: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ID:",
      lbl_crypto_hash: "ᱠᱨᱤᱯᱴᱳᱜᱽᱨᱟᱯᱷᱤᱠ ᱦᱮᱥ:",
      lbl_dgms_valid: "DGMS ᱢᱟᱱᱟᱣ & ᱪᱟᱹᱞᱩ",
      lbl_dgms_standard: "ᱠᱷᱟᱫᱟᱱ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱰᱤᱨᱮᱠᱴᱚᱨᱮᱴ (DGMS) ᱢᱟᱱᱚᱠ",
      lbl_worker_auth: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱯᱚᱨᱠᱷᱟᱣ",
      lbl_emp_format: "ᱪᱷᱟᱸᱪ: EMP-XXXX",
      duration_15_mins: "᱑᱕ ᱴᱤᱯᱤᱡ",
      duration_10_mins: "᱑᱐ ᱴᱤᱯᱤᱡ",
      failed_pass_threshold_note: "75% (4 ᱨᱮ 3 ᱠᱟᱹᱢᱤ)",
      err_custom_dept_name: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱧᱩᱛᱩᱢ ᱚᱞ ᱢᱮ᱾",
      err_admin_worker_fields: "ᱫᱟᱭᱟᱠᱟᱛᱮ ᱡᱚᱛᱚ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱡᱟᱭᱜᱟ ᱯᱮᱨᱮᱡ ᱢᱮ᱾",
      phone_sub_modules: "DGMS ᱨᱩᱠᱷᱤᱭᱟᱹ AR ᱰᱷᱟᱞ",
      phone_sub_ar: "AR ᱞᱟᱭᱤᱵᱷ ᱴᱮᱞᱤᱢᱮᱴᱨᱤ",
      phone_sub_cert: "ᱰᱤᱡᱤᱴᱟᱞ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱟᱥᱯᱳᱨᱴ",
      phone_sub_failed: "ᱠᱟᱹᱢᱤ ᱯᱚᱨᱠᱷᱟᱣ",

      // Department Names & Subtitles
      dept_mining_name: "ᱠᱷᱟᱫᱟᱱ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ",
      dept_mining_sub: "ᱠᱷᱟᱫᱟᱱ ᱟᱨ ᱠᱷᱟᱫᱟᱱ ᱠᱷᱚᱱ ᱫᱷᱤᱨᱤ ᱚᱰᱚᱠ",
      dept_prod_name: "ᱵᱮᱱᱟᱣ ᱟᱨ ᱩᱛᱯᱟᱫᱚᱱ",
      dept_prod_sub: "ᱡᱚᱲᱟᱣ ᱟᱨ ᱵᱮᱱᱟᱣ ᱞᱟᱭᱤᱱ",
      dept_proc_name: "ᱥᱟᱯᱲᱟᱣ ᱟᱨ ᱥᱟᱢᱟᱱ ᱤᱫᱤ-ᱟᱹᱜᱩ",
      dept_proc_sub: "ᱜᱩᱸᱰᱟᱹ, ᱵᱟᱪᱷᱟᱣ ᱟᱨ ᱠᱚᱱᱵᱷᱮᱭᱟᱨ",
      dept_mech_name: "ᱢᱮᱠᱟᱱᱤᱠᱟᱞ",
      dept_mech_sub: "ᱢᱟᱨᱟᱝ ᱢᱮᱥᱤᱱ ᱟᱨ ᱦᱟᱭᱰᱨᱳᱞᱤᱠᱥ",
      dept_elec_name: "ᱵᱤᱡᱽᱞᱤ (Electrical)",
      dept_elec_sub: "ᱥᱟᱵᱽᱥᱴᱮᱥᱚᱱ ᱟᱨ ᱵᱤᱡᱽᱞᱤ ᱞᱟᱭᱤᱱ",
      dept_maint_name: "ᱡᱚᱛᱚᱱ ᱟᱨ ᱢᱮᱱᱴᱮᱱᱮᱱᱥ",
      dept_maint_sub: "ᱞᱟᱦᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱟᱨ ᱵᱮᱱᱟᱣ",
      dept_plant_name: "ᱯᱞᱟᱱᱴ ᱟᱨ ᱥᱟᱯᱟᱵ ᱪᱟᱞᱟᱣ",
      dept_plant_sub: "ᱵᱚᱭᱞᱟᱨ, ᱪᱩᱞᱦᱟᱹ ᱟᱨ ᱨᱳᱴᱟᱨᱤ",
      dept_safety_name: "ᱨᱩᱠᱷᱤᱭᱟᱹ / HSE",
      dept_safety_sub: "DGMS ᱟᱨ ᱵᱚᱛᱚᱨ ᱥᱟᱸᱵᱽᱲᱟᱣ",
      dept_qa_name: "ᱜᱩᱱ ᱯᱚᱨᱠᱷᱟᱣ / QA",
      dept_qa_sub: "ᱞᱮᱵᱽ ᱯᱚᱨᱠᱷᱟᱣ ᱟᱨ ᱪᱷᱟᱹᱲ",
      dept_util_name: "ᱵᱤᱡᱽᱞᱤ, ᱫᱟᱜ ᱟᱨ ᱫᱟᱲᱮ",
      dept_util_sub: "ᱫᱟᱜ, ᱜᱮᱥ ᱟᱨ ᱯᱟᱣᱟᱨ ᱜᱽᱨᱤᱰ",
      dept_store_name: "ᱜᱳᱫᱟᱢ ᱟᱨ ᱥᱴᱳᱨ",
      dept_store_sub: "ᱠᱟᱸᱪᱟ ᱥᱟᱢᱟᱱ ᱟᱨ ᱥᱴᱳᱨ",
      dept_log_name: "ᱜᱟᱹᱰᱤ-ᱢᱚᱴᱚᱨ ᱟᱨ ᱯᱚᱨᱤᱵᱚᱦᱚᱱ",
      dept_log_sub: "ᱜᱟᱹᱰᱤ, ᱫᱷᱤᱨᱤ ᱤᱫᱤ ᱟᱨ ᱰᱤᱥᱯᱮᱪ",
      dept_eng_name: "ᱤᱧᱡᱤᱱᱤᱭᱟᱹᱨᱤᱝ ᱟᱨ ᱯᱨᱳᱡᱮᱠᱴ",
      dept_eng_sub: "ᱥᱤᱵᱷᱤᱞ ᱟᱨ ᱥᱟᱭᱤᱴ ᱵᱮᱱᱟᱣ",
      dept_hr_name: "ᱮᱰᱢᱤᱱ ᱟᱨ HR",
      dept_hr_sub: "ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱨ ᱯᱞᱟᱱᱴ ᱢᱮᱱᱮᱡᱽᱢᱮᱱᱴ",
      dept_other_name: "ᱮᱴᱟᱜ (Other)",
      dept_other_sub: "ᱱᱤᱡᱮᱨᱟᱜ ᱰᱤᱯᱟᱨᱴᱢᱮᱱᱴ ᱚᱞ ᱢᱮ"
    }
  };

  // Current Language State
  let currentLang = localStorage.getItem('kawachar_lang') || 'en';
  if (!I18N[currentLang]) currentLang = 'en';

  function t(key) {
    if (I18N[currentLang] && I18N[currentLang][key]) {
      return I18N[currentLang][key];
    }
    if (I18N.en[key]) {
      return I18N.en[key];
    }
    return key;
  }

  // Localized getters for shared demo data & entities
  function getLocalizedOrgName(org) {
    if (!org) return '';
    if (org.id === 'KAW-00001' || (org.orgName && (org.orgName.includes('Bharat Mining') || org.orgName.includes('भारत माइनिंग') || org.orgName.includes('ᱵᱷᱟᱨᱚᱛ ᱢᱟᱭᱱᱤᱝ')))) {
      return t('demo_org_name');
    }
    return org.orgName;
  }

  function getLocalizedOrgLocation(org) {
    if (!org) return '';
    if (org.id === 'KAW-00001' || (org.location && (org.location.includes('Dhanbad') || org.location.includes('धनबाद') || org.location.includes('ᱫᱷᱟᱱᱵᱟᱫᱽ')))) {
      return t('demo_org_location');
    }
    return org.location;
  }

  function getLocalizedAdminName(org) {
    if (!org) return '';
    if (org.id === 'KAW-00001' || (org.adminName && (org.adminName.includes('Rajeshwar') || org.adminName.includes('राजेश्वर') || org.adminName.includes('ᱨᱟᱡᱮᱥᱣᱚᱨ')))) {
      return t('demo_admin_name');
    }
    return org.adminName;
  }

  function getLocalizedWorkerName(worker) {
    if (!worker) return '';
    if (worker.workerId === 'EMP-0001' || (worker.fullName && (worker.fullName.includes('Ramesh') || worker.fullName.includes('रमेश') || worker.fullName.includes('ᱨᱟᱢᱮᱥ')))) {
      return t('demo_worker_name');
    }
    return worker.fullName;
  }

  function getLocalizedWorkerAddress(worker) {
    if (!worker) return '';
    if (worker.workerId === 'EMP-0001' || (worker.address && (worker.address.includes('Quarter B-42') || worker.address.includes('क्वार्टर बी-42') || worker.address.includes('ᱠᱣᱟᱨᱴᱟᱨ B-42')))) {
      return t('demo_worker_address');
    }
    return worker.address;
  }

  const DEPT_KEY_MAP = {
    'Mining / Extraction Operations': 'dept_mining_name',
    'Production / Manufacturing': 'dept_prod_name',
    'Processing / Material Handling': 'dept_proc_name',
    'Mechanical': 'dept_mech_name',
    'Electrical': 'dept_elec_name',
    'Maintenance': 'dept_maint_name',
    'Plant / Equipment Operations': 'dept_plant_name',
    'Safety / HSE (Health, Safety & Environment)': 'dept_safety_name',
    'Safety / HSE': 'dept_safety_name',
    'Quality Control / Quality Assurance': 'dept_qa_name',
    'Quality Control / QA': 'dept_qa_name',
    'Utilities / Power & Energy': 'dept_util_name',
    'Warehouse / Stores': 'dept_store_name',
    'Logistics / Transportation': 'dept_log_name',
    'Engineering / Projects': 'dept_eng_name',
    'Administration / HR': 'dept_hr_name',
    'Other': 'dept_other_name'
  };

  function getLocalizedDeptName(deptName) {
    if (!deptName) return '';
    const key = DEPT_KEY_MAP[deptName];
    if (key && I18N[currentLang] && I18N[currentLang][key]) {
      return I18N[currentLang][key];
    }
    return deptName;
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('kawachar_lang', lang);

    // 1. Translate all text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && I18N[currentLang] && I18N[currentLang][key]) {
        el.textContent = I18N[currentLang][key];
      }
    });

    // 2. Translate placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && I18N[currentLang] && I18N[currentLang][key]) {
        el.placeholder = I18N[currentLang][key];
      }
    });

    // 3. Synchronize global header dropdown
    const globalLangSelector = document.getElementById('globalLangSelector');
    if (globalLangSelector) globalLangSelector.value = lang;

    // 4. Synchronize in-phone mini language selector
    const phoneLangSelector = document.getElementById('phoneLangSelector');
    if (phoneLangSelector) phoneLangSelector.value = lang;

    // 5. Synchronize landing language cards
    document.querySelectorAll('.lang-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-lang') === lang);
    });

    // 6. Update single registration doc labels and hints dynamically
    updateSingleRegFieldTypeUI();

    // 7. Refresh dropdowns & tables with localized names
    populateWorkerLoginOrgDropdown();
    populateAdminWorkerOrgDropdown();
    renderRegistryTable();
    renderWorkersTable();
    renderCertAuditTable();
    renderCertQuickPills();
    updateMetrics();

    // 8. If worker is logged in, refresh phone dashboard screen
    if (activeWorker) {
      setupTrainingModulesScreen(activeWorker);
    }

    // 9. If AR simulation screen is currently active, immediately re-render the task in the newly selected language (Point 7)
    const screenARSimulation = document.getElementById('screenARSimulation');
    if (screenARSimulation && !screenARSimulation.classList.contains('hidden')) {
      renderCurrentARTask();
    }

    // 10. Update network toggle and telemetry badge labels in current language
    updateNetworkUI();

    // Re-create lucide icons after text modifications
    if (window.lucide) window.lucide.createIcons();
  }

  // Language change event listeners
  const globalLangSelector = document.getElementById('globalLangSelector');
  if (globalLangSelector) {
    globalLangSelector.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  const phoneLangSelector = document.getElementById('phoneLangSelector');
  if (phoneLangSelector) {
    phoneLangSelector.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.getAttribute('data-lang');
      if (selected) applyLanguage(selected);
    });
  });

  // ==========================================
  // 2. STORAGE KEYS & SEED DATA INITIALIZATION
  // ==========================================
  // 2. STORAGE KEYS & CLEAN DATA INITIALIZATION
  // ==========================================
  const STORAGE_KEY_REGISTRATIONS = 'kawachar_registrations_v2';
  const STORAGE_KEY_SEQ = 'kawachar_id_sequence_v2';
  const STORAGE_KEY_WORKERS = 'kawachar_workers_v2';
  const STORAGE_KEY_WORKER_SEQ = 'kawachar_worker_seq_v2';
  const STORAGE_KEY_ACTIVE_SESSION = 'kawachar_active_worker_session_v2';
  const DATA_CLEAN_RESET_FLAG = 'kawachar_clean_reset_v4';

  const SEED_ORGANIZATIONS = [];
  const SEED_WORKERS = [];

  function resetAllSystemData(showNotification = false) {
    localStorage.removeItem(STORAGE_KEY_REGISTRATIONS);
    localStorage.removeItem(STORAGE_KEY_SEQ);
    localStorage.removeItem(STORAGE_KEY_WORKERS);
    localStorage.removeItem(STORAGE_KEY_WORKER_SEQ);
    localStorage.removeItem('kawachar_certificates_v2');
    localStorage.removeItem(STORAGE_KEY_ACTIVE_SESSION);
    localStorage.removeItem('kawachar_offline_queue_v2');
    localStorage.setItem(STORAGE_KEY_REGISTRATIONS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEY_SEQ, '0');
    localStorage.setItem(STORAGE_KEY_WORKERS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEY_WORKER_SEQ, '0');
    localStorage.setItem('kawachar_certificates_v2', JSON.stringify([]));
    activeWorker = null;

    renderRegistryTable();
    renderWorkersTable();
    renderCertAuditTable();
    renderCertQuickPills();
    updateMetrics();
    populateWorkerLoginOrgDropdown();
    populateAdminWorkerOrgDropdown();

    if (showNotification) {
      showToast('✓ All existing data cleared completely. Counters reset to KAW-00001 & EMP-0001.', 'success');
    }
  }

  function initStorage() {
    // Unconditionally wipe all previous test data on initial load
    localStorage.removeItem(STORAGE_KEY_REGISTRATIONS);
    localStorage.removeItem(STORAGE_KEY_SEQ);
    localStorage.removeItem(STORAGE_KEY_WORKERS);
    localStorage.removeItem(STORAGE_KEY_WORKER_SEQ);
    localStorage.removeItem('kawachar_certificates_v2');
    localStorage.removeItem(STORAGE_KEY_ACTIVE_SESSION);
    localStorage.removeItem('kawachar_offline_queue_v2');
    localStorage.setItem(STORAGE_KEY_REGISTRATIONS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEY_SEQ, '0');
    localStorage.setItem(STORAGE_KEY_WORKERS, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEY_WORKER_SEQ, '0');
    localStorage.setItem('kawachar_certificates_v2', JSON.stringify([]));
  }
  initStorage();

  // Active Session State
  let activeWorker = null;

  // ==========================================
  // 3. STORAGE & SEQUENCE HELPERS
  // ==========================================
  function getCurrentSeq() {
    const raw = localStorage.getItem(STORAGE_KEY_SEQ);
    return raw ? parseInt(raw, 10) || 0 : 0;
  }

  function formatOrgId(num) {
    return `KAW-${String(num).padStart(5, '0')}`;
  }

  function getNextOrgId() {
    return formatOrgId(getCurrentSeq() + 1);
  }

  function allocateNextOrgId() {
    const nextSeq = getCurrentSeq() + 1;
    localStorage.setItem(STORAGE_KEY_SEQ, nextSeq.toString());
    return formatOrgId(nextSeq);
  }

  function getStoredRegistrations() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_REGISTRATIONS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveRegistrationRecord(record) {
    const records = getStoredRegistrations();
    records.push(record);
    localStorage.setItem(STORAGE_KEY_REGISTRATIONS, JSON.stringify(records));
  }

  function getCurrentWorkerSeq() {
    const raw = localStorage.getItem(STORAGE_KEY_WORKER_SEQ);
    return raw ? parseInt(raw, 10) || 0 : 0;
  }

  function formatWorkerId(num) {
    return `EMP-${String(num).padStart(4, '0')}`;
  }

  function getNextWorkerId() {
    return formatWorkerId(getCurrentWorkerSeq() + 1);
  }

  function allocateNextWorkerId() {
    const nextSeq = getCurrentWorkerSeq() + 1;
    localStorage.setItem(STORAGE_KEY_WORKER_SEQ, nextSeq.toString());
    return formatWorkerId(nextSeq);
  }

  function getStoredWorkers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_WORKERS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveWorkerRecord(worker) {
    const workers = getStoredWorkers();
    workers.push(worker);
    localStorage.setItem(STORAGE_KEY_WORKERS, JSON.stringify(workers));
  }

  function updateWorkerRecord(updatedWorker) {
    const workers = getStoredWorkers();
    const idx = workers.findIndex(w => (w.workerId || '').toUpperCase() === (updatedWorker.workerId || '').toUpperCase());
    if (idx !== -1) {
      workers[idx] = updatedWorker;
      localStorage.setItem(STORAGE_KEY_WORKERS, JSON.stringify(workers));
    }
  }

  function findWorkerById(workerId) {
    const workers = getStoredWorkers();
    return workers.find(w => (w.workerId || '').toUpperCase() === (workerId || '').toUpperCase());
  }

  // ==========================================
  // 4. TOP-LEVEL VIEW ROUTING (LANDING / ADMIN / WORKER)
  // ==========================================
  const viewLanding = document.getElementById('viewLanding');
  const viewAdminPortal = document.getElementById('viewAdminPortal');
  const viewWorkerApp = document.getElementById('viewWorkerApp');
  
  const navViewBadgeText = document.getElementById('navViewBadgeText');
  const navLandingBtn = document.getElementById('navLandingBtn');
  const navAdminPortalBtn = document.getElementById('navAdminPortalBtn');
  const navWorkerAppBtn = document.getElementById('navWorkerAppBtn');
  const navBrandLink = document.getElementById('navBrandLink');
  
  // Landing CTAs
  const btnEnterAdminPortal = document.getElementById('btnEnterAdminPortal');
  const btnEnterWorkerApp = document.getElementById('btnEnterWorkerApp');
  const workerViewBackToLanding = document.getElementById('workerViewBackToLanding');

  function navigateToMainView(viewId) {
    if (viewId !== 'viewWorkerApp') {
      stopCameraFeed();
    }

    if (viewLanding) viewLanding.classList.add('hidden');
    if (viewAdminPortal) viewAdminPortal.classList.add('hidden');
    if (viewWorkerApp) viewWorkerApp.classList.add('hidden');

    if (viewId === 'viewLanding') {
      if (viewLanding) viewLanding.classList.remove('hidden');
      if (navLandingBtn) navLandingBtn.classList.add('hidden');
      if (navViewBadgeText) {
        navViewBadgeText.setAttribute('data-i18n', 'nav_landing_view');
        navViewBadgeText.textContent = t('nav_landing_view');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewId === 'viewAdminPortal') {
      if (viewAdminPortal) viewAdminPortal.classList.remove('hidden');
      if (navLandingBtn) navLandingBtn.classList.remove('hidden');
      if (navViewBadgeText) {
        navViewBadgeText.setAttribute('data-i18n', 'nav_admin_view');
        navViewBadgeText.textContent = t('nav_admin_view');
      }
      renderRegistryTable();
      renderWorkersTable();
      renderCertAuditTable();
      updateMetrics();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewId === 'viewWorkerApp') {
      if (viewWorkerApp) viewWorkerApp.classList.remove('hidden');
      if (navLandingBtn) navLandingBtn.classList.remove('hidden');
      if (navViewBadgeText) {
        navViewBadgeText.setAttribute('data-i18n', 'nav_worker_view');
        navViewBadgeText.textContent = t('nav_worker_view');
      }
      populateWorkerLoginOrgDropdown();
      
      // Check persistent active session
      checkActiveWorkerSession();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  if (navBrandLink) navBrandLink.addEventListener('click', () => navigateToMainView('viewLanding'));
  if (navLandingBtn) navLandingBtn.addEventListener('click', () => navigateToMainView('viewLanding'));
  if (navAdminPortalBtn) navAdminPortalBtn.addEventListener('click', () => navigateToMainView('viewAdminPortal'));
  if (navWorkerAppBtn) navWorkerAppBtn.addEventListener('click', () => navigateToMainView('viewWorkerApp'));
  
  if (btnEnterAdminPortal) btnEnterAdminPortal.addEventListener('click', () => navigateToMainView('viewAdminPortal'));
  if (btnEnterWorkerApp) btnEnterWorkerApp.addEventListener('click', () => navigateToMainView('viewWorkerApp'));
  if (workerViewBackToLanding) workerViewBackToLanding.addEventListener('click', () => navigateToMainView('viewLanding'));

  // ==========================================
  // 5. IN-PHONE SCREEN TRANSITIONS & SESSION
  // ==========================================
  const phoneScreenPanes = document.querySelectorAll('.phone-screen-pane');
  const phoneBackBtn = document.getElementById('phoneBackBtn');
  const phoneHeaderSub = document.getElementById('phoneHeaderSub');
  const phoneScreenViewport = document.getElementById('phoneScreenViewport');
  const quickResetAppBtn = document.getElementById('quickResetAppBtn');

  function navigateToPhoneScreen(screenId) {
    if (screenId !== 'screenARSimulation') {
      stopCameraFeed();
    }

    phoneScreenPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === screenId);
    });

    if (phoneScreenViewport) {
      phoneScreenViewport.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (screenId === 'screenWorkerLogin') {
      if (phoneBackBtn) phoneBackBtn.classList.add('hidden');
      if (phoneHeaderSub) {
        phoneHeaderSub.setAttribute('data-i18n', 'phone_header_sub');
        phoneHeaderSub.textContent = t('phone_header_sub');
      }
    } else if (screenId === 'screenTrainingModules') {
      if (phoneBackBtn) phoneBackBtn.classList.add('hidden');
      if (phoneHeaderSub) {
        phoneHeaderSub.setAttribute('data-i18n', 'phone_sub_modules');
        phoneHeaderSub.textContent = t('phone_sub_modules');
      }
    } else if (screenId === 'screenARSimulation') {
      if (phoneBackBtn) phoneBackBtn.classList.remove('hidden');
      if (phoneHeaderSub) {
        phoneHeaderSub.setAttribute('data-i18n', 'phone_sub_ar');
        phoneHeaderSub.textContent = t('phone_sub_ar');
      }
    } else if (screenId === 'screenCertificate') {
      if (phoneBackBtn) phoneBackBtn.classList.remove('hidden');
      if (phoneHeaderSub) {
        phoneHeaderSub.setAttribute('data-i18n', 'phone_sub_cert');
        phoneHeaderSub.textContent = t('phone_sub_cert');
      }
    } else if (screenId === 'screenTrainingResultFailed') {
      if (phoneBackBtn) phoneBackBtn.classList.remove('hidden');
      if (phoneHeaderSub) {
        phoneHeaderSub.setAttribute('data-i18n', 'phone_sub_failed');
        phoneHeaderSub.textContent = t('phone_sub_failed');
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  if (phoneBackBtn) {
    phoneBackBtn.addEventListener('click', () => {
      const activePane = document.querySelector('.phone-screen-pane.active');
      if (activePane) {
        if (activePane.id === 'screenARSimulation' || activePane.id === 'screenCertificate') {
          stopCameraFeed();
          navigateToPhoneScreen('screenTrainingModules');
        }
      }
    });
  }

  function checkActiveWorkerSession() {
    try {
      const rawSession = localStorage.getItem(STORAGE_KEY_ACTIVE_SESSION);
      if (rawSession) {
        const worker = JSON.parse(rawSession);
        if (worker && worker.workerId) {
          activeWorker = worker;
          setupTrainingModulesScreen(worker);
          navigateToPhoneScreen('screenTrainingModules');
          return;
        }
      }
    } catch {
      // Fallback to login
    }
    navigateToPhoneScreen('screenWorkerLogin');
  }

  if (quickResetAppBtn) {
    quickResetAppBtn.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY_ACTIVE_SESSION);
      activeWorker = null;
      const workerLoginForm = document.getElementById('workerLoginForm');
      if (workerLoginForm) workerLoginForm.reset();
      resetWorkerLoginDynamicState();
      populateWorkerLoginOrgDropdown();
      navigateToPhoneScreen('screenWorkerLogin');
      showToast('Worker session reset to Login screen', 'info');
    });
  }

  // ==========================================
  // 6. NEW WORKER LOGIN & 1-CLICK DEMO FLOW (POINT 6)
  // ==========================================
  const loginOrgSelect = document.getElementById('loginOrgSelect');
  const loginWorkerId = document.getElementById('loginWorkerId');
  const loginPassword = document.getElementById('loginPassword');
  const loginConfirmPassword = document.getElementById('loginConfirmPassword');
  const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
  const firstTimeHelper = document.getElementById('firstTimeHelper');
  const btnLoginText = document.getElementById('btnLoginText');
  const workerLoginForm = document.getElementById('workerLoginForm');
  const loginGlobalError = document.getElementById('loginGlobalError');
  const loginGlobalErrorMessage = document.getElementById('loginGlobalErrorMessage');
  const btnUseDemoWorker = document.getElementById('btnUseDemoWorker');

  let isFirstTimeLoginState = false;

  function populateWorkerLoginOrgDropdown(selectedOrgId = '') {
    if (!loginOrgSelect) return;
    const orgs = getStoredRegistrations();
    orgs.sort((a, b) => (a.id || '').localeCompare(b.id || '', undefined, { numeric: true }));

    loginOrgSelect.innerHTML = `<option value="" disabled ${!selectedOrgId ? 'selected' : ''}>${t('opt_choose_facility')}</option>`;
    orgs.forEach(org => {
      const opt = document.createElement('option');
      opt.value = org.id;
      opt.textContent = `${getLocalizedOrgName(org)} (${org.id})`;
      if (selectedOrgId && org.id === selectedOrgId) {
        opt.selected = true;
      }
      loginOrgSelect.appendChild(opt);
    });
  }

  function resetWorkerLoginDynamicState() {
    isFirstTimeLoginState = false;
    if (confirmPasswordGroup) confirmPasswordGroup.classList.add('hidden');
    if (firstTimeHelper) firstTimeHelper.classList.add('hidden');
    if (loginPassword) loginPassword.value = '';
    if (loginConfirmPassword) loginConfirmPassword.value = '';
    if (loginGlobalError) loginGlobalError.classList.add('hidden');
    if (btnLoginText) {
      btnLoginText.setAttribute('data-i18n', 'btn_login_worker');
      btnLoginText.textContent = t('btn_login_worker');
    }
  }

  function checkWorkerIdStatus(enteredId) {
    if (!enteredId || enteredId.trim() === '') {
      resetWorkerLoginDynamicState();
      return;
    }

    const worker = findWorkerById(enteredId.trim());
    if (worker) {
      // Auto-select worker's organization if not chosen yet
      if (loginOrgSelect && worker.orgId) {
        loginOrgSelect.value = worker.orgId;
      }

      if (!worker.passwordSet || !worker.password) {
        // First-time setup required!
        isFirstTimeLoginState = true;
        if (confirmPasswordGroup) confirmPasswordGroup.classList.remove('hidden');
        if (firstTimeHelper) firstTimeHelper.classList.remove('hidden');
        if (btnLoginText) {
          btnLoginText.setAttribute('data-i18n', 'btn_set_pwd_login');
          btnLoginText.textContent = t('btn_set_pwd_login');
        }
      } else {
        // Returning worker
        isFirstTimeLoginState = false;
        if (confirmPasswordGroup) confirmPasswordGroup.classList.add('hidden');
        if (firstTimeHelper) firstTimeHelper.classList.add('hidden');
        if (btnLoginText) {
          btnLoginText.setAttribute('data-i18n', 'btn_login_worker');
          btnLoginText.textContent = t('btn_login_worker');
        }
      }
    } else {
      resetWorkerLoginDynamicState();
    }
  }

  if (loginWorkerId) {
    loginWorkerId.addEventListener('input', (e) => {
      clearFieldError('loginWorkerId', 'loginWorkerIdError');
      if (loginGlobalError) loginGlobalError.classList.add('hidden');
      checkWorkerIdStatus(e.target.value);
    });
  }

  // 1-Click Fast Live Demo Button (POINT 6)
  if (btnUseDemoWorker) {
    btnUseDemoWorker.addEventListener('click', () => {
      // Ensure shared demo org exists
      let orgs = getStoredRegistrations();
      if (!orgs.some(o => o.id === 'KAW-00001')) {
        saveRegistrationRecord({
          id: "KAW-00001",
          orgName: t('demo_org_name'),
          industryType: "Mining",
          location: t('demo_org_location'),
          docType: "licence",
          docLabel: "Registration / Licence Number",
          docValue: "DGMS/MIN/2024/8892",
          departments: [
            "Mining / Extraction Operations",
            "Plant / Equipment Operations",
            "Safety / HSE (Health, Safety & Environment)",
            "Maintenance"
          ],
          adminName: t('demo_admin_name'),
          adminPhone: "+91 98765 43210",
          adminEmail: "safety.officer@bharatmining.com",
          registeredAt: new Date().toISOString()
        });
      }

      // Find or create sample worker (Ramesh - EMP-0001)
      let demoWorker = findWorkerById('EMP-0001');
      if (!demoWorker) {
        demoWorker = {
          workerId: "EMP-0001",
          orgId: "KAW-00001",
          orgName: t('demo_org_name'),
          fullName: t('demo_worker_name'),
          mobile: "9876543210",
          address: t('demo_worker_address'),
          aadhaar: "XXXX-XXXX-4812",
          departments: ["Mining / Extraction Operations", "Safety / HSE (Health, Safety & Environment)"],
          passwordSet: true,
          password: "safety123",
          createdAt: new Date().toISOString()
        };
        saveWorkerRecord(demoWorker);
      } else {
        demoWorker.password = demoWorker.password || 'safety123';
        demoWorker.passwordSet = true;
        updateWorkerRecord(demoWorker);
      }

      if (loginOrgSelect) loginOrgSelect.value = demoWorker.orgId;
      if (loginWorkerId) loginWorkerId.value = demoWorker.workerId;
      if (loginPassword) loginPassword.value = demoWorker.password;

      // Immediate Login!
      activeWorker = demoWorker;
      localStorage.setItem(STORAGE_KEY_ACTIVE_SESSION, JSON.stringify(demoWorker));
      
      const locWorkerName = getLocalizedWorkerName(demoWorker);
      showToast(`Logged in as Demo Worker: ${locWorkerName} (${demoWorker.workerId})`, 'success');
      setupTrainingModulesScreen(demoWorker);
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  // Demo Auto-Fill Button on Worker Login Form (Req 11)
  const btnDemoFillLogin = document.getElementById('btnDemoFillLogin');
  if (btnDemoFillLogin) {
    btnDemoFillLogin.addEventListener('click', () => {
      let orgs = getStoredRegistrations();
      if (!orgs.some(o => o.id === 'KAW-00001')) {
        saveRegistrationRecord({
          id: "KAW-00001",
          orgName: t('demo_org_name'),
          industryType: "Mining",
          location: t('demo_org_location'),
          docType: "licence",
          docLabel: "Registration / Licence Number",
          docValue: "DGMS/MIN/2024/8892",
          departments: [
            "Mining / Extraction Operations",
            "Plant / Equipment Operations",
            "Safety / HSE (Health, Safety & Environment)",
            "Maintenance"
          ],
          adminName: t('demo_admin_name'),
          adminPhone: "+91 98765 43210",
          adminEmail: "safety.officer@bharatmining.com",
          registeredAt: new Date().toISOString()
        });
      }
      populateWorkerLoginOrgDropdown('KAW-00001');

      let demoWorker = findWorkerById('EMP-0001');
      if (!demoWorker) {
        demoWorker = {
          workerId: "EMP-0001",
          orgId: "KAW-00001",
          orgName: t('demo_org_name'),
          fullName: t('demo_worker_name'),
          mobile: "9876543210",
          address: t('demo_worker_address'),
          aadhaar: "XXXX-XXXX-4812",
          departments: ["Mining / Extraction Operations", "Safety / HSE (Health, Safety & Environment)"],
          passwordSet: true,
          password: "safety123",
          createdAt: new Date().toISOString()
        };
        saveWorkerRecord(demoWorker);
      }

      if (loginOrgSelect) loginOrgSelect.value = 'KAW-00001';
      if (loginWorkerId) {
        loginWorkerId.value = 'EMP-0001';
        checkWorkerIdStatus('EMP-0001');
      }
      if (loginPassword) loginPassword.value = 'safety123';
      if (loginConfirmPassword) loginConfirmPassword.value = 'safety123';

      if (loginGlobalError) loginGlobalError.classList.add('hidden');
      clearFieldError('loginOrgSelect', 'loginOrgSelectError');
      clearFieldError('loginWorkerId', 'loginWorkerIdError');
      clearFieldError('loginPassword', 'loginPasswordError');
      clearFieldError('loginConfirmPassword', 'loginConfirmPasswordError');

      showToast(t('toast_demo_login_filled'), 'info');
    });
  }

  // Worker Login Form Submission
  if (workerLoginForm) {
    workerLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const selectedOrg = loginOrgSelect ? loginOrgSelect.value : '';
      const enteredWorkerId = loginWorkerId ? loginWorkerId.value.trim().toUpperCase() : '';
      const enteredPwd = loginPassword ? loginPassword.value : '';
      const enteredConfirmPwd = loginConfirmPassword ? loginConfirmPassword.value : '';

      if (!selectedOrg) {
        showFieldError('loginOrgSelect', 'loginOrgSelectError', t('err_select_org'));
        isValid = false;
      } else {
        clearFieldError('loginOrgSelect', 'loginOrgSelectError');
      }

      if (!enteredWorkerId) {
        showFieldError('loginWorkerId', 'loginWorkerIdError', t('err_worker_id'));
        isValid = false;
      } else {
        clearFieldError('loginWorkerId', 'loginWorkerIdError');
      }

      if (!enteredPwd || enteredPwd.length < 6) {
        showFieldError('loginPassword', 'loginPasswordError', t('err_password'));
        isValid = false;
      } else {
        clearFieldError('loginPassword', 'loginPasswordError');
      }

      if (isFirstTimeLoginState) {
        if (!enteredConfirmPwd || enteredConfirmPwd !== enteredPwd) {
          showFieldError('loginConfirmPassword', 'loginConfirmPasswordError', t('err_pwd_mismatch'));
          isValid = false;
        } else {
          clearFieldError('loginConfirmPassword', 'loginConfirmPasswordError');
        }
      }

      if (!isValid) return;

      // Authenticate
      const worker = findWorkerById(enteredWorkerId);
      if (!worker) {
        if (loginGlobalError) {
          loginGlobalErrorMessage.textContent = `Worker ID "${enteredWorkerId}" is not enrolled. Please ask plant admin to add this worker.`;
          loginGlobalError.classList.remove('hidden');
        }
        return;
      }

      if (worker.orgId !== selectedOrg) {
        if (loginGlobalError) {
          loginGlobalErrorMessage.textContent = `Worker "${enteredWorkerId}" is assigned to a different facility (${worker.orgName}).`;
          loginGlobalError.classList.remove('hidden');
        }
        return;
      }

      if (isFirstTimeLoginState || !worker.passwordSet) {
        // Activate account & persist password
        worker.password = enteredPwd;
        worker.passwordSet = true;
        updateWorkerRecord(worker);
        showToast(`First-time password activated for ${worker.fullName}!`, 'success');
      } else {
        // Verify returning password
        if (worker.password !== enteredPwd) {
          showFieldError('loginPassword', 'loginPasswordError', 'Incorrect password for this Worker ID.');
          if (loginGlobalError) {
            loginGlobalErrorMessage.textContent = 'Incorrect password. Please try again.';
            loginGlobalError.classList.remove('hidden');
          }
          return;
        }
      }

      // Success! Persist session
      if (loginGlobalError) loginGlobalError.classList.add('hidden');
      activeWorker = worker;
      localStorage.setItem(STORAGE_KEY_ACTIVE_SESSION, JSON.stringify(worker));
      
      showToast(`Welcome, ${worker.fullName}!`, 'success');
      setupTrainingModulesScreen(worker);
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  // ==========================================
  // 7. TRAINING MODULES SCREEN & LOGOUT
  // ==========================================
  const dashWorkerName = document.getElementById('dashWorkerName');
  const dashWorkerId = document.getElementById('dashWorkerId');
  const dashFacilityName = document.getElementById('dashFacilityName');
  const dashWorkerDepts = document.getElementById('dashWorkerDepts');
  const btnLogoutWorker = document.getElementById('btnLogoutWorker');
  const btnLogoutFromModules = document.getElementById('btnLogoutFromModules');

  function setupTrainingModulesScreen(worker) {
    if (!worker) return;
    if (dashWorkerName) dashWorkerName.textContent = getLocalizedWorkerName(worker);
    if (dashWorkerId) dashWorkerId.textContent = worker.workerId;
    
    const orgs = getStoredRegistrations();
    const matchedOrg = orgs.find(o => o.id === worker.orgId);
    if (dashFacilityName) {
      dashFacilityName.textContent = matchedOrg ? getLocalizedOrgName(matchedOrg) : (worker.orgId === 'KAW-00001' ? t('demo_org_name') : worker.orgName);
    }

    if (dashWorkerDepts) {
      dashWorkerDepts.innerHTML = (worker.departments || []).map(d => `
        <span class="dash-dept-pill">
          <i data-lucide="tag" class="w-3 h-3 inline"></i> ${d}
        </span>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function handleLogout() {
    activeWorker = null;
    localStorage.removeItem(STORAGE_KEY_ACTIVE_SESSION);
    showToast('Logged out of session', 'info');
    resetWorkerLoginDynamicState();
    populateWorkerLoginOrgDropdown();
    navigateToPhoneScreen('screenWorkerLogin');
  }

  if (btnLogoutWorker) btnLogoutWorker.addEventListener('click', handleLogout);
  if (btnLogoutFromModules) btnLogoutFromModules.addEventListener('click', handleLogout);

  // ==========================================
  // 7B. AR SIMULATION HUD & LIVE WEBCAM ENGINE (4 TASKS ENFORCED)
  // ==========================================
  const MODULE_DEFINITIONS = {
    fire_explosion: {
      id: 'fire_explosion',
      title: 'Fire & Explosion Response',
      titleKey: 'mod_fire_title',
      category: 'Emergency Hazard',
      tasks: [
        {
          id: 1,
          stepKey: 'fe_t1_step',
          badgeKey: 'fe_t1_badge',
          titleKey: 'fe_t1_title',
          scenarioKey: 'fe_t1_scenario',
          marker: {
            icon: 'door-open',
            pill: 'EXIT',
            labelKey: 'fe_t1_marker_label',
            telemetryKey: 'fe_t1_marker_tel',
            baseX: 52,
            baseY: 36,
            type: 'safe'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'fe_t1_opt_b' },
            { id: 'opt_b', pill: 'B', textKey: 'fe_t1_opt_a' },
            { id: 'opt_c', pill: 'C', textKey: 'fe_t1_opt_c' }
          ],
          correctId: 'opt_a',
          correctFeedbackKey: 'fe_t1_correct_fb',
          incorrectFeedbackKey: 'fe_t1_incorrect_fb'
        },
        {
          id: 2,
          stepKey: 'fe_t2_step',
          badgeKey: 'fe_t2_badge',
          titleKey: 'fe_t2_title',
          scenarioKey: 'fe_t2_scenario',
          marker: {
            icon: 'flame',
            pill: 'FIRE',
            labelKey: 'fe_t2_marker_label',
            telemetryKey: 'fe_t2_marker_tel',
            baseX: 50,
            baseY: 40,
            type: 'danger'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'fe_t2_opt_a' },
            { id: 'opt_b', pill: 'B', textKey: 'fe_t2_opt_c' },
            { id: 'opt_c', pill: 'C', textKey: 'fe_t2_opt_b' }
          ],
          correctId: 'opt_c',
          correctFeedbackKey: 'fe_t2_correct_fb',
          incorrectFeedbackKey: 'fe_t2_incorrect_fb'
        },
        {
          id: 3,
          stepKey: 'fe_t3_step',
          badgeKey: 'fe_t3_badge',
          titleKey: 'fe_t3_title',
          scenarioKey: 'fe_t3_scenario',
          marker: {
            icon: 'wind',
            pill: 'FLOW',
            labelKey: 'fe_t3_marker_label',
            telemetryKey: 'fe_t3_marker_tel',
            baseX: 54,
            baseY: 35,
            type: 'danger'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'fe_t3_opt_a' },
            { id: 'opt_b', pill: 'B', textKey: 'fe_t3_opt_b' },
            { id: 'opt_c', pill: 'C', textKey: 'fe_t3_opt_c' }
          ],
          correctId: 'opt_b',
          correctFeedbackKey: 'fe_t3_correct_fb',
          incorrectFeedbackKey: 'fe_t3_incorrect_fb'
        },
        {
          id: 4,
          stepKey: 'fe_t4_step',
          badgeKey: 'fe_t4_badge',
          titleKey: 'fe_t4_title',
          scenarioKey: 'fe_t4_scenario',
          marker: {
            icon: 'shield-check',
            pill: 'LOTO',
            labelKey: 'fe_t4_marker_label',
            telemetryKey: 'fe_t4_marker_tel',
            baseX: 48,
            baseY: 38,
            type: 'safe'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'fe_t4_opt_b' },
            { id: 'opt_b', pill: 'B', textKey: 'fe_t4_opt_a' },
            { id: 'opt_c', pill: 'C', textKey: 'fe_t4_opt_c' }
          ],
          correctId: 'opt_a',
          correctFeedbackKey: 'fe_t4_correct_fb',
          incorrectFeedbackKey: 'fe_t4_incorrect_fb'
        }
      ]
    },
    gas_leak: {
      id: 'gas_leak',
      title: 'Gas Leak & Confined Space Protocol',
      titleKey: 'mod_gas_title',
      category: 'Toxic Atmosphere',
      tasks: [
        {
          id: 1,
          stepKey: 'gl_t1_step',
          badgeKey: 'gl_t1_badge',
          titleKey: 'gl_t1_title',
          scenarioKey: 'gl_t1_scenario',
          marker: {
            icon: 'alert-octagon',
            pill: 'TOXIC',
            labelKey: 'gl_t1_marker_label',
            telemetryKey: 'gl_t1_marker_tel',
            baseX: 52,
            baseY: 38,
            type: 'danger'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'gl_t1_opt_a' },
            { id: 'opt_b', pill: 'B', textKey: 'gl_t1_opt_c' },
            { id: 'opt_c', pill: 'C', textKey: 'gl_t1_opt_b' }
          ],
          correctId: 'opt_c',
          correctFeedbackKey: 'gl_t1_correct_fb',
          incorrectFeedbackKey: 'gl_t1_incorrect_fb'
        },
        {
          id: 2,
          stepKey: 'gl_t2_step',
          badgeKey: 'gl_t2_badge',
          titleKey: 'gl_t2_title',
          scenarioKey: 'gl_t2_scenario',
          marker: {
            icon: 'shield-alert',
            pill: 'PPE',
            labelKey: 'gl_t2_marker_label',
            telemetryKey: 'gl_t2_marker_tel',
            baseX: 48,
            baseY: 40,
            type: 'danger'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'gl_t2_opt_b' },
            { id: 'opt_b', pill: 'B', textKey: 'gl_t2_opt_a' },
            { id: 'opt_c', pill: 'C', textKey: 'gl_t2_opt_c' }
          ],
          correctId: 'opt_a',
          correctFeedbackKey: 'gl_t2_correct_fb',
          incorrectFeedbackKey: 'gl_t2_incorrect_fb'
        },
        {
          id: 3,
          stepKey: 'gl_t3_step',
          badgeKey: 'gl_t3_badge',
          titleKey: 'gl_t3_title',
          scenarioKey: 'gl_t3_scenario',
          marker: {
            icon: 'gauge',
            pill: 'PROBE',
            labelKey: 'gl_t3_marker_label',
            telemetryKey: 'gl_t3_marker_tel',
            baseX: 50,
            baseY: 36,
            type: 'danger'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'gl_t3_opt_a' },
            { id: 'opt_b', pill: 'B', textKey: 'gl_t3_opt_c' },
            { id: 'opt_c', pill: 'C', textKey: 'gl_t3_opt_b' }
          ],
          correctId: 'opt_c',
          correctFeedbackKey: 'gl_t3_correct_fb',
          incorrectFeedbackKey: 'gl_t3_incorrect_fb'
        },
        {
          id: 4,
          stepKey: 'gl_t4_step',
          badgeKey: 'gl_t4_badge',
          titleKey: 'gl_t4_title',
          scenarioKey: 'gl_t4_scenario',
          marker: {
            icon: 'life-buoy',
            pill: 'RIG',
            labelKey: 'gl_t4_marker_label',
            telemetryKey: 'gl_t4_marker_tel',
            baseX: 52,
            baseY: 40,
            type: 'safe'
          },
          options: [
            { id: 'opt_a', pill: 'A', textKey: 'gl_t4_opt_a' },
            { id: 'opt_b', pill: 'B', textKey: 'gl_t4_opt_b' },
            { id: 'opt_c', pill: 'C', textKey: 'gl_t4_opt_c' }
          ],
          correctId: 'opt_b',
          correctFeedbackKey: 'gl_t4_correct_fb',
          incorrectFeedbackKey: 'gl_t4_incorrect_fb'
        }
      ]
    }
  };

  let currentCameraStream = null;
  let currentActiveModuleId = 'fire_explosion';
  let currentTaskIndex = 0;
  let selectedOptionId = null;
  let scanTimer = null;
  let latestGeneratedCertId = null;
  let attemptScore = 0;
  let attemptAnswers = [];
  let isTaskLocked = false;
  let attemptJitterOffset = { x: 0, y: 0 };

  const arVideoFeed = document.getElementById('arVideoFeed');
  const arFallbackFeed = document.getElementById('arFallbackFeed');
  const arScanningOverlay = document.getElementById('arScanningOverlay');
  const arScanStatusText = document.getElementById('arScanStatusText');
  const arMarkersContainer = document.getElementById('arMarkersContainer');
  const arHudModuleName = document.getElementById('arHudModuleName');
  const arHudTaskStep = document.getElementById('arHudTaskStep');
  const arTaskBadge = document.getElementById('arTaskBadge');
  const arTaskHeading = document.getElementById('arTaskHeading');
  const arTaskScenarioText = document.getElementById('arTaskScenarioText');
  const arTaskOptionsWrap = document.getElementById('arTaskOptionsWrap');
  const arTaskFeedbackAlert = document.getElementById('arTaskFeedbackAlert');
  const arFeedbackIcon = document.getElementById('arFeedbackIcon');
  const arFeedbackText = document.getElementById('arFeedbackText');
  const btnSubmitARTask = document.getElementById('btnSubmitARTask');
  const btnSubmitARTaskText = document.getElementById('btnSubmitARTaskText');
  const btnExitARSimulation = document.getElementById('btnExitARSimulation');

  function generateAttemptJitter() {
    attemptJitterOffset = {
      x: Number((Math.random() * 6 - 3).toFixed(1)),
      y: Number((Math.random() * 5 - 2.5).toFixed(1))
    };
  }

  async function startCameraFeed() {
    stopCameraFeed();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.warn('getUserMedia not supported in this browser.');
      if (arVideoFeed) arVideoFeed.classList.add('hidden');
      if (arFallbackFeed) arFallbackFeed.classList.remove('hidden');
      return false;
    }

    try {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false
        });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }

      if (stream) {
        currentCameraStream = stream;
        if (arVideoFeed) {
          arVideoFeed.srcObject = stream;
          arVideoFeed.classList.remove('hidden');
          try {
            await arVideoFeed.play();
          } catch (e) {
            console.warn('Auto-play error on video stream:', e);
          }
        }
        if (arFallbackFeed) arFallbackFeed.classList.add('hidden');
        return true;
      }
    } catch (err) {
      console.warn('Webcam permission denied or camera device not found. Using simulated fallback:', err);
      if (arVideoFeed) {
        arVideoFeed.srcObject = null;
        arVideoFeed.classList.add('hidden');
      }
      if (arFallbackFeed) arFallbackFeed.classList.remove('hidden');
      return false;
    }
  }

  function stopCameraFeed() {
    if (currentCameraStream) {
      try {
        currentCameraStream.getTracks().forEach(t => t.stop());
      } catch (e) {
        console.warn('Error stopping camera tracks:', e);
      }
      currentCameraStream = null;
    }
    if (arVideoFeed) {
      arVideoFeed.srcObject = null;
      arVideoFeed.classList.add('hidden');
    }
    if (scanTimer) {
      clearTimeout(scanTimer);
      scanTimer = null;
    }
  }

  function triggerScanningOverlay(onComplete) {
    if (!arScanningOverlay) {
      if (onComplete) onComplete();
      return;
    }
    if (scanTimer) clearTimeout(scanTimer);

    arScanningOverlay.classList.remove('scanning-complete', 'hidden');
    if (arScanStatusText) arScanStatusText.textContent = t('ar_scan_init') || 'Initializing AR Engine...';

    const step1 = setTimeout(() => {
      if (arScanStatusText) arScanStatusText.textContent = 'Calibrating Spatial Mesh & LiDAR...';
    }, 600);

    const step2 = setTimeout(() => {
      if (arScanStatusText) arScanStatusText.textContent = 'Telemetry Synchronized. Spatial Targets Identified.';
    }, 1300);

    scanTimer = setTimeout(() => {
      clearTimeout(step1);
      clearTimeout(step2);
      arScanningOverlay.classList.add('scanning-complete');
      setTimeout(() => {
        arScanningOverlay.classList.add('hidden');
        if (onComplete) onComplete();
      }, 250);
    }, 1800);
  }

  function startARModule(moduleId) {
    const mod = MODULE_DEFINITIONS[moduleId] || MODULE_DEFINITIONS.fire_explosion;
    currentActiveModuleId = mod.id;
    currentTaskIndex = 0;
    selectedOptionId = null;
    attemptScore = 0;
    attemptAnswers = [];
    isTaskLocked = false;
    generateAttemptJitter();

    navigateToPhoneScreen('screenARSimulation');
    
    // Request and start real live webcam feed
    startCameraFeed();

    // Trigger AR Scanning overlay & load Task 1
    triggerScanningOverlay(() => {
      renderCurrentARTask();
    });
  }

  function updateProgressDots() {
    for (let i = 1; i <= 4; i++) {
      const dot = document.getElementById(`arStepDot${i}`);
      const line = document.getElementById(`arStepLine${i}`);
      if (dot) {
        dot.className = 'ar-step-dot';
        if (i - 1 < currentTaskIndex) {
          const ans = attemptAnswers[i - 1];
          if (ans && ans.correct) {
            dot.classList.add('completed');
          } else if (ans && !ans.correct) {
            dot.classList.add('failed');
          } else {
            dot.classList.add('completed');
          }
        } else if (i - 1 === currentTaskIndex) {
          dot.classList.add('active');
        }
      }
      if (line) {
        line.className = 'ar-step-line';
        if (i <= currentTaskIndex) {
          line.classList.add('completed');
        }
      }
    }
  }

  function renderCurrentARTask() {
    const mod = MODULE_DEFINITIONS[currentActiveModuleId] || MODULE_DEFINITIONS.fire_explosion;
    const task = mod.tasks[currentTaskIndex];
    if (!task) return;

    selectedOptionId = null;
    isTaskLocked = false;

    if (arHudModuleName) arHudModuleName.textContent = t(mod.titleKey) || mod.title;
    if (arHudTaskStep) arHudTaskStep.textContent = t(task.stepKey);
    if (arTaskBadge) arTaskBadge.textContent = t(task.badgeKey);
    if (arTaskHeading) arTaskHeading.textContent = t(task.titleKey);
    if (arTaskScenarioText) arTaskScenarioText.textContent = t(task.scenarioKey);

    if (arTaskFeedbackAlert) arTaskFeedbackAlert.classList.add('hidden');
    if (btnSubmitARTask) btnSubmitARTask.disabled = false;
    if (btnSubmitARTaskText) btnSubmitARTaskText.textContent = t('btn_confirm_choice') || 'Confirm Selection';

    updateProgressDots();

    // Render single contextual virtual AR hazard marker on live camera (Icon-First Graphic Redesign)
    if (arMarkersContainer) {
      const m = task.marker;
      if (m) {
        const posX = Math.max(12, Math.min(84, m.baseX + attemptJitterOffset.x));
        const posY = Math.max(18, Math.min(68, m.baseY + attemptJitterOffset.y));
        arMarkersContainer.innerHTML = `
          <div class="ar-marker-item single-hazard-marker ${m.type || 'danger'}" data-marker-target style="left: ${posX}%; top: ${posY}%;">
            <div class="ar-marker-visual">
              <div class="ar-marker-pulse-ring ring-1"></div>
              <div class="ar-marker-pulse-ring ring-2"></div>
              <div class="ar-marker-reticle">
                <span class="ar-reticle-corner top-l"></span>
                <span class="ar-reticle-corner top-r"></span>
                <span class="ar-reticle-corner bottom-l"></span>
                <span class="ar-reticle-corner bottom-r"></span>
                <div class="ar-marker-radar-sweep"></div>
                <div class="ar-marker-icon-core">
                  <i data-lucide="${m.icon}" class="ar-core-icon"></i>
                </div>
              </div>
            </div>
            <div class="ar-marker-chip">
              <span class="ar-chip-indicator"></span>
              <span class="ar-chip-text">${t(m.labelKey)}</span>
            </div>
          </div>
        `;

        const markerEl = arMarkersContainer.querySelector('.ar-marker-item');
        if (markerEl) {
          markerEl.addEventListener('click', () => {
            markerEl.classList.add('pulse-focus');
            setTimeout(() => markerEl.classList.remove('pulse-focus'), 600);
          });
        }
      } else {
        arMarkersContainer.innerHTML = '';
      }
    }

    // Render interactive option cards
    if (arTaskOptionsWrap) {
      arTaskOptionsWrap.innerHTML = task.options.map(opt => `
        <div class="ar-choice-card" data-option-id="${opt.id}" tabindex="0" role="button">
          <div class="ar-choice-pill">${opt.pill}</div>
          <div class="ar-choice-text">${t(opt.textKey)}</div>
        </div>
      `).join('');

      arTaskOptionsWrap.querySelectorAll('.ar-choice-card').forEach(el => {
        el.addEventListener('click', () => {
          handleAnswerSelection(el.getAttribute('data-option-id'));
        });
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleAnswerSelection(el.getAttribute('data-option-id'));
          }
        });
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function handleAnswerSelection(optId) {
    if (isTaskLocked) return;
    isTaskLocked = true;

    const mod = MODULE_DEFINITIONS[currentActiveModuleId] || MODULE_DEFINITIONS.fire_explosion;
    const task = mod.tasks[currentTaskIndex];
    if (!task) return;

    selectedOptionId = optId;
    const isCorrect = (optId === task.correctId);

    if (isCorrect) {
      attemptScore++;
    }
    attemptAnswers[currentTaskIndex] = {
      taskId: task.id,
      selected: optId,
      correct: isCorrect
    };

    // 1. Visual feedback on choice cards (Immediate, no retry)
    if (arTaskOptionsWrap) {
      arTaskOptionsWrap.querySelectorAll('.ar-choice-card').forEach(card => {
        const cardOptId = card.getAttribute('data-option-id');
        card.classList.add('disabled');
        if (cardOptId === optId) {
          card.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
      });
    }

    // 2. Visual feedback on AR Hazard Marker (Green on correct / Red on incorrect)
    if (arMarkersContainer) {
      const marker = arMarkersContainer.querySelector('.ar-marker-item');
      if (marker) {
        marker.classList.add(isCorrect ? 'correct' : 'incorrect');
      }
    }

    // 3. Step dot status
    const currentDot = document.getElementById(`arStepDot${currentTaskIndex + 1}`);
    if (currentDot) {
      currentDot.className = 'ar-step-dot';
      currentDot.classList.add(isCorrect ? 'completed' : 'failed');
    }
    const currentLine = document.getElementById(`arStepLine${currentTaskIndex + 1}`);
    if (currentLine) currentLine.classList.add('completed');

    // 4. Feedback Alert display
    if (arTaskFeedbackAlert && arFeedbackText) {
      arFeedbackText.textContent = isCorrect ? t(task.correctFeedbackKey) : t(task.incorrectFeedbackKey);
      arTaskFeedbackAlert.className = `ar-feedback-alert ${isCorrect ? 'correct' : 'incorrect'}`;
      arTaskFeedbackAlert.classList.remove('hidden');
      if (arFeedbackIcon) {
        arFeedbackIcon.setAttribute('data-lucide', isCorrect ? 'check-circle' : 'alert-triangle');
      }
      if (window.lucide) window.lucide.createIcons();
    }

    if (btnSubmitARTask) {
      btnSubmitARTask.disabled = true;
    }

    // 5. Automatic advance after brief visual feedback (1.3s)
    setTimeout(() => {
      if (currentTaskIndex < 3) {
        currentTaskIndex++;
        triggerScanningOverlay(() => {
          renderCurrentARTask();
        });
      } else {
        // Enforce exactly 4 tasks completed before triggering result screen
        finishModuleEvaluation(currentActiveModuleId);
      }
    }, 1300);
  }

  if (btnSubmitARTask) {
    btnSubmitARTask.addEventListener('click', () => {
      if (isTaskLocked) return;
      if (!selectedOptionId) {
        // If nothing selected yet, select first option by default or show feedback
        const mod = MODULE_DEFINITIONS[currentActiveModuleId] || MODULE_DEFINITIONS.fire_explosion;
        const task = mod.tasks[currentTaskIndex];
        if (task && task.options && task.options[0]) {
          handleAnswerSelection(task.options[0].id);
        }
      } else {
        handleAnswerSelection(selectedOptionId);
      }
    });
  }

  if (btnExitARSimulation) {
    btnExitARSimulation.addEventListener('click', () => {
      stopCameraFeed();
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  // Module Cards Interactive Click Listeners
  document.querySelectorAll('.module-card-interactive').forEach(card => {
    card.addEventListener('click', () => {
      const moduleId = card.getAttribute('data-module-id') || 'fire_explosion';
      startARModule(moduleId);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const moduleId = card.getAttribute('data-module-id') || 'fire_explosion';
        startARModule(moduleId);
      }
    });
  });

  // ==========================================
  // 7C. EVALUATION ENGINE (75% PASS MARK) & QR CERTIFICATE / RETAKE HANDLING
  // ==========================================
  const STORAGE_KEY_CERTS = 'kawachar_certificates_v2';

  const SEED_CERTIFICATES = [];

  function getStoredCertificates() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CERTS);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY_CERTS, JSON.stringify([]));
        return [];
      }
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  function saveCertificateRecord(cert) {
    const certs = getStoredCertificates();
    certs.unshift(cert);
    localStorage.setItem(STORAGE_KEY_CERTS, JSON.stringify(certs));
    updateMetrics();
  }

  function findCertificateById(certId) {
    const certs = getStoredCertificates();
    const cleanId = (certId || '').trim().toUpperCase();
    return certs.find(c => (c.certId || '').toUpperCase() === cleanId);
  }

  function findCertificateForWorker(workerId) {
    if (!workerId) return null;
    const certs = getStoredCertificates();
    const cleanId = workerId.trim().toUpperCase();
    return certs.find(c => (c.workerId || '').trim().toUpperCase() === cleanId);
  }

  // ==========================================
  // 7D. OFFLINE MODE MANAGER & LOCAL STORAGE SYNC ENGINE
  // ==========================================
  const STORAGE_KEY_NETWORK_MODE = 'kawachar_network_mode_v2';
  const STORAGE_KEY_OFFLINE_QUEUE = 'kawachar_offline_queue_v2';

  let isOfflineMode = (localStorage.getItem(STORAGE_KEY_NETWORK_MODE) === 'offline');
  let isSyncInProgress = false;

  function getOfflineQueue() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_OFFLINE_QUEUE);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveOfflineQueue(queue) {
    try {
      localStorage.setItem(STORAGE_KEY_OFFLINE_QUEUE, JSON.stringify(queue));
    } catch (e) {
      console.error('Error saving offline queue:', e);
    }
  }

  function enqueueOfflineRecord(type, data) {
    const queue = getOfflineQueue();
    queue.push({
      id: `queue_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      type: type, // 'certificate' | 'retake'
      data: data,
      timestamp: new Date().toISOString()
    });
    saveOfflineQueue(queue);
  }

  function updateNetworkUI(modeState = null) {
    const currentMode = modeState !== null ? modeState : (isOfflineMode ? 'offline' : 'online');
    const btnNetworkToggle = document.getElementById('btnNetworkToggle');
    const netPillIcon = document.getElementById('netPillIcon');
    const netPillText = document.getElementById('netPillText');
    const statusNetworkBadge = document.getElementById('statusNetworkBadge');
    const statusWifiIcon = document.getElementById('statusWifiIcon');
    const dashNetworkTag = document.getElementById('dashNetworkTag');
    const safetyStatusPulse = document.getElementById('safetyStatusPulse');
    const arHudLiveTag = document.getElementById('arHudLiveTag');
    const arHudLiveDot = document.getElementById('arHudLiveDot');
    const arHudLiveText = document.getElementById('arHudLiveText');

    if (currentMode === 'offline') {
      if (btnNetworkToggle) {
        btnNetworkToggle.className = 'network-mode-pill offline';
        btnNetworkToggle.title = 'Offline Mode active (Local Storage). Click to toggle Online & Sync.';
      }
      if (netPillIcon) netPillIcon.setAttribute('data-lucide', 'wifi-off');
      if (netPillText) netPillText.textContent = t('status_offline') || 'Offline';

      if (statusNetworkBadge) {
        statusNetworkBadge.textContent = 'OFFLINE';
        statusNetworkBadge.classList.add('offline');
      }
      if (statusWifiIcon) statusWifiIcon.setAttribute('data-lucide', 'wifi-off');

      if (dashNetworkTag) {
        dashNetworkTag.textContent = `${t('status_offline') || 'Offline'} (Local)`;
        dashNetworkTag.classList.add('offline');
      }
      if (safetyStatusPulse) safetyStatusPulse.classList.add('offline');

      if (arHudLiveTag) arHudLiveTag.classList.add('offline');
      if (arHudLiveDot) {
        arHudLiveDot.className = 'pulse-dot-amber';
      }
      if (arHudLiveText) arHudLiveText.textContent = 'OFFLINE AR';

    } else if (currentMode === 'syncing') {
      if (btnNetworkToggle) {
        btnNetworkToggle.className = 'network-mode-pill syncing';
        btnNetworkToggle.title = 'Syncing offline records with DGMS Cloud...';
      }
      if (netPillIcon) netPillIcon.setAttribute('data-lucide', 'refresh-cw');
      if (netPillText) netPillText.textContent = t('status_syncing') || 'Syncing...';

    } else if (currentMode === 'synced') {
      if (btnNetworkToggle) {
        btnNetworkToggle.className = 'network-mode-pill synced';
      }
      if (netPillIcon) netPillIcon.setAttribute('data-lucide', 'check');
      if (netPillText) netPillText.textContent = t('status_synced') || 'Synced ✓';

      if (statusNetworkBadge) {
        statusNetworkBadge.textContent = '5G';
        statusNetworkBadge.classList.remove('offline');
      }
      if (statusWifiIcon) statusWifiIcon.setAttribute('data-lucide', 'wifi');

      if (dashNetworkTag) {
        dashNetworkTag.textContent = t('status_online') || 'Online';
        dashNetworkTag.classList.remove('offline');
      }
      if (safetyStatusPulse) safetyStatusPulse.classList.remove('offline');

      if (arHudLiveTag) arHudLiveTag.classList.remove('offline');
      if (arHudLiveDot) {
        arHudLiveDot.className = 'pulse-dot-red';
      }
      if (arHudLiveText) arHudLiveText.textContent = 'LIVE AR';

    } else {
      // Steady Online
      if (btnNetworkToggle) {
        btnNetworkToggle.className = 'network-mode-pill online';
        btnNetworkToggle.title = 'Online Mode (DGMS Cloud Connected). Click to simulate Offline Mode.';
      }
      if (netPillIcon) netPillIcon.setAttribute('data-lucide', 'wifi');
      if (netPillText) netPillText.textContent = t('status_online') || 'Online';

      if (statusNetworkBadge) {
        statusNetworkBadge.textContent = '5G';
        statusNetworkBadge.classList.remove('offline');
      }
      if (statusWifiIcon) statusWifiIcon.setAttribute('data-lucide', 'wifi');

      if (dashNetworkTag) {
        dashNetworkTag.textContent = t('status_online') || 'Online';
        dashNetworkTag.classList.remove('offline');
      }
      if (safetyStatusPulse) safetyStatusPulse.classList.remove('offline');

      if (arHudLiveTag) arHudLiveTag.classList.remove('offline');
      if (arHudLiveDot) {
        arHudLiveDot.className = 'pulse-dot-red';
      }
      if (arHudLiveText) arHudLiveText.textContent = 'LIVE AR';
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function toggleNetworkMode() {
    if (isSyncInProgress) return;

    if (!isOfflineMode) {
      // Switch to OFFLINE
      isOfflineMode = true;
      localStorage.setItem(STORAGE_KEY_NETWORK_MODE, 'offline');
      updateNetworkUI('offline');
      showToast(t('offline_toast_desc') || 'Offline Mode: Assessments will save locally.', 'amber');
    } else {
      // Switch back to ONLINE -> Trigger simulated Sync
      isSyncInProgress = true;
      updateNetworkUI('syncing');

      const queue = getOfflineQueue();
      const queueCount = queue.length;

      if (queueCount > 0) {
        showToast(`🔄 ${t('toast_syncing_records') || 'Syncing offline records to DGMS Cloud...'} (${queueCount})`, 'info');
      } else {
        showToast(`🔄 ${t('toast_syncing_records') || 'Syncing offline records to DGMS Cloud...'}`, 'info');
      }

      // Simulate realistic network sync latency (1.2s)
      setTimeout(() => {
        isOfflineMode = false;
        localStorage.setItem(STORAGE_KEY_NETWORK_MODE, 'online');

        // Flush offline queue to main database
        queue.forEach(item => {
          if (item.type === 'certificate' && item.data) {
            const cert = item.data.cert;
            const worker = item.data.worker;
            if (cert) {
              cert.isOfflinePending = false;
              cert.syncStatus = 'SYNCED';
              // Update in main cert list
              const certs = getStoredCertificates();
              const existingIdx = certs.findIndex(c => c.certId === cert.certId);
              if (existingIdx >= 0) {
                certs[existingIdx] = cert;
                localStorage.setItem(STORAGE_KEY_CERTS, JSON.stringify(certs));
              } else {
                saveCertificateRecord(cert);
              }
            }
            if (worker) {
              worker.syncStatus = 'SYNCED';
              updateWorkerRecord(worker);
            }
          }
        });

        // Clear offline queue
        saveOfflineQueue([]);

        // Update UI to "Synced ✓"
        updateNetworkUI('synced');

        // Update any open certificate screen from pending to synced
        const certOfflineBanner = document.getElementById('certOfflineBanner');
        const certStatusTag = document.getElementById('certStatusTag');
        const certStatusTagIcon = document.getElementById('certStatusTagIcon');
        const certStatusTagText = document.getElementById('certStatusTagText');
        const certLiveStatusDot = document.getElementById('certLiveStatusDot');
        const certLiveStatusText = document.getElementById('certLiveStatusText');

        if (certOfflineBanner && !certOfflineBanner.classList.contains('hidden')) {
          certOfflineBanner.classList.add('synced-flash');
          const bannerText = document.getElementById('certOfflineBannerText');
          if (bannerText) bannerText.textContent = `✓ ${t('badge_synced_cloud') || 'Synced to DGMS Cloud'}`;
          setTimeout(() => {
            certOfflineBanner.classList.add('hidden');
            certOfflineBanner.classList.remove('synced-flash');
          }, 2400);
        }

        if (certStatusTag) {
          certStatusTag.className = 'cert-status-tag synced-flash';
          if (certStatusTagIcon) certStatusTagIcon.setAttribute('data-lucide', 'shield-check');
          if (certStatusTagText) certStatusTagText.textContent = t('cert_verified_tag') || 'DGMS Verified';
        }

        if (certLiveStatusDot) certLiveStatusDot.className = 'status-indicator-dot';
        if (certLiveStatusText) certLiveStatusText.textContent = 'DGMS Valid & Active';

        const failedOfflineBanner = document.getElementById('failedOfflineBanner');
        if (failedOfflineBanner) failedOfflineBanner.classList.add('hidden');

        renderWorkersTable();
        renderCertAuditTable();
        renderCertQuickPills();
        updateMetrics();

        showToast(`✓ ${t('toast_synced_success') || 'Synced! Records & certificates updated in Admin Dashboard.'}`, 'success');

        // Return to steady Online after 1.8s
        setTimeout(() => {
          isSyncInProgress = false;
          updateNetworkUI('online');
        }, 1800);
      }, 1200);
    }
  }

  const btnNetworkToggle = document.getElementById('btnNetworkToggle');
  if (btnNetworkToggle) {
    btnNetworkToggle.addEventListener('click', toggleNetworkMode);
  }

  function populateCertificateCard(cert, isAdmin = false) {
    if (!cert) return;
    const p = isAdmin ? 'adminCert' : 'cert';
    const nameEl = document.getElementById(`${p}WorkerName`);
    const idEl = document.getElementById(`${p}WorkerId`);
    const orgEl = document.getElementById(`${p}OrgName`);
    const modEl = document.getElementById(`${p}ModuleName`);
    const scoreEl = document.getElementById(`${p}ScoreNumber`);
    const uidEl = document.getElementById(`${p}UniqueId`);
    const hashEl = document.getElementById(`${p}CryptoHash`);
    const dateEl = document.getElementById(`${p}IssueDateText`);
    const canvasEl = document.getElementById(`${p}QrCanvas`);

    if (nameEl) nameEl.textContent = cert.workerName;
    if (idEl) idEl.textContent = cert.workerId;
    if (orgEl) orgEl.textContent = cert.orgName;
    if (modEl) modEl.textContent = cert.moduleName;
    if (scoreEl) scoreEl.textContent = `${cert.score}%`;
    if (uidEl) uidEl.textContent = cert.certId;
    if (hashEl) hashEl.textContent = cert.cryptoHash;
    if (dateEl) dateEl.textContent = `Issued: ${cert.issueDateText || new Date(cert.issuedAt).toLocaleDateString()}`;

    // Handle Offline vs Online indicator states on worker certificate screen
    if (!isAdmin) {
      const certStatusTag = document.getElementById('certStatusTag');
      const certStatusTagIcon = document.getElementById('certStatusTagIcon');
      const certStatusTagText = document.getElementById('certStatusTagText');
      const certOfflineBanner = document.getElementById('certOfflineBanner');
      const certLiveStatusDot = document.getElementById('certLiveStatusDot');
      const certLiveStatusText = document.getElementById('certLiveStatusText');

      if (cert.isOfflinePending) {
        if (certStatusTag) {
          certStatusTag.className = 'cert-status-tag offline-pending';
        }
        if (certStatusTagIcon) {
          certStatusTagIcon.setAttribute('data-lucide', 'hard-drive');
        }
        if (certStatusTagText) {
          certStatusTagText.textContent = t('badge_offline_pending') || 'Saved locally, pending sync';
        }
        if (certOfflineBanner) {
          certOfflineBanner.classList.remove('hidden');
          const bannerText = document.getElementById('certOfflineBannerText');
          if (bannerText) bannerText.textContent = t('offline_notice_text') || 'Saved locally, pending sync to DGMS Cloud.';
        }
        if (certLiveStatusDot) {
          certLiveStatusDot.className = 'status-indicator-dot bg-amber-500';
        }
        if (certLiveStatusText) {
          certLiveStatusText.textContent = 'Offline • Saved Locally (Sync Pending)';
        }
      } else {
        if (certStatusTag) {
          certStatusTag.className = 'cert-status-tag';
        }
        if (certStatusTagIcon) {
          certStatusTagIcon.setAttribute('data-lucide', 'shield-check');
        }
        if (certStatusTagText) {
          certStatusTagText.textContent = t('cert_verified_tag') || 'DGMS Verified';
        }
        if (certOfflineBanner) {
          certOfflineBanner.classList.add('hidden');
        }
        if (certLiveStatusDot) {
          certLiveStatusDot.className = 'status-indicator-dot';
        }
        if (certLiveStatusText) {
          certLiveStatusText.textContent = 'DGMS Valid & Active';
        }
      }
    }

    if (canvasEl) {
      const qrData = JSON.stringify({
        certId: cert.certId,
        workerId: cert.workerId,
        workerName: cert.workerName,
        module: cert.moduleName,
        score: `${cert.score}%`,
        hash: cert.cryptoHash,
        dgmsCompliance: "VERIFIED_DGMS_KAWACHAR",
        storageMode: cert.isOfflinePending ? "LOCAL_STORAGE_PENDING_SYNC" : "DGMS_CLOUD_SYNCED"
      });

      QRCode.toCanvas(canvasEl, qrData, {
        width: 140,
        margin: 1,
        color: {
          dark: '#0f172a',
          light: '#ffffff'
        }
      }, (err) => {
        if (err) console.error('QR code render error:', err);
      });
    }
  }

  // Admin Digital Certificate Modal Handlers
  const adminCertModalBackdrop = document.getElementById('adminCertModalBackdrop');
  const adminCertModalCloseBtn = document.getElementById('adminCertModalCloseBtn');
  const adminCertDoneBtn = document.getElementById('adminCertDoneBtn');
  const adminCertVerifyAuditBtn = document.getElementById('adminCertVerifyAuditBtn');

  function openAdminCertModal(workerOrCertId) {
    let cert = null;
    let worker = null;

    if (typeof workerOrCertId === 'string') {
      cert = findCertificateById(workerOrCertId);
      if (!cert) {
        worker = findWorkerById(workerOrCertId);
        if (worker) {
          cert = findCertificateForWorker(worker.workerId);
        }
      } else {
        worker = findWorkerById(cert.workerId);
      }
    } else if (workerOrCertId && typeof workerOrCertId === 'object') {
      if (workerOrCertId.certId && workerOrCertId.cryptoHash) {
        cert = workerOrCertId;
        worker = findWorkerById(cert.workerId);
      } else if (workerOrCertId.workerId) {
        worker = workerOrCertId;
        cert = findCertificateForWorker(worker.workerId);
      }
    }

    // Fallback: If worker is marked certified but cert record is missing in storage, construct & save one
    if (!cert && worker && (worker.trainingStatus === 'Certified' || (worker.trainingScore && worker.trainingScore >= 75))) {
      const certRandomNum = Math.floor(10000 + Math.random() * 90000);
      const certId = worker.certId || `KAW-CERT-${certRandomNum}`;
      const hashHex = Array.from(crypto.getRandomValues(new Uint8Array(12))).map(b => b.toString(16).padStart(2, '0')).join('');
      const orgs = getStoredRegistrations();
      const matchedOrg = orgs.find(o => o.id === worker.orgId);
      const now = new Date(worker.trainingAttemptDate || Date.now());
      const dateFormatted = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' • ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST';
      
      cert = {
        certId: certId,
        workerId: worker.workerId,
        workerName: getLocalizedWorkerName(worker),
        orgId: worker.orgId,
        orgName: matchedOrg ? getLocalizedOrgName(matchedOrg) : (worker.orgId === 'KAW-00001' ? t('demo_org_name') : worker.orgName || 'Industrial Plant Unit'),
        moduleId: 'fire_explosion',
        moduleName: worker.trainingModule || t('mod_fire_title') || 'Fire & Explosion Response',
        score: worker.trainingScore || 100,
        status: 'PASSED',
        cryptoHash: `SHA256:${hashHex}`,
        issuedAt: now.toISOString(),
        issueDateText: dateFormatted
      };
      worker.certId = certId;
      worker.trainingStatus = 'Certified';
      updateWorkerRecord(worker);
      saveCertificateRecord(cert);
    }

    if (!cert) {
      showToast('No active certificate record found for this worker.', 'amber');
      return;
    }

    populateCertificateCard(cert, true);

    if (adminCertModalBackdrop) {
      adminCertModalBackdrop.dataset.certId = cert.certId;
      adminCertModalBackdrop.classList.remove('hidden');
    }
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  function closeAdminCertModal() {
    if (adminCertModalBackdrop) adminCertModalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (adminCertModalCloseBtn) adminCertModalCloseBtn.addEventListener('click', closeAdminCertModal);
  if (adminCertDoneBtn) adminCertDoneBtn.addEventListener('click', closeAdminCertModal);
  if (adminCertVerifyAuditBtn) {
    adminCertVerifyAuditBtn.addEventListener('click', () => {
      const certId = adminCertModalBackdrop ? adminCertModalBackdrop.dataset.certId : null;
      closeAdminCertModal();
      switchAdminTab('verify');
      if (certId && inputCertLookup) {
        inputCertLookup.value = certId;
        handleCertLookup(certId);
        const sec = document.getElementById('sectionVerifyCert');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function finishModuleEvaluation(moduleId) {
    stopCameraFeed();
    const mod = MODULE_DEFINITIONS[moduleId] || MODULE_DEFINITIONS.fire_explosion;
    const worker = activeWorker || findWorkerById('EMP-0001') || {
      workerId: 'EMP-0001',
      fullName: 'Ramesh Kumar Soren',
      orgId: 'KAW-00001',
      orgName: 'Bharat Mining & Minerals Corp. Unit #4'
    };

    const correctCount = attemptScore;
    const finalScore = Math.round((correctCount / 4) * 100);
    const passed = finalScore >= 75;

    // Persist real outcome to worker directory record for Admin Dashboard
    worker.trainingStatus = passed ? 'Certified' : 'Retake';
    worker.trainingScore = finalScore;
    worker.trainingModule = t(mod.titleKey) || mod.title;
    worker.trainingAttemptDate = new Date().toISOString();
    worker.syncStatus = isOfflineMode ? 'LOCAL_PENDING' : 'SYNCED';

    if (passed) {
      // 75% or higher (3/4 or 4/4) -> Issue Official DGMS QR Certificate
      const certRandomNum = Math.floor(10000 + Math.random() * 90000);
      const certId = `KAW-CERT-${certRandomNum}`;
      const hashHex = Array.from(crypto.getRandomValues(new Uint8Array(12))).map(b => b.toString(16).padStart(2, '0')).join('');
      const cryptoHash = `SHA256:${hashHex}`;
      
      const now = new Date();
      const dateFormatted = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' • ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST';

      const certRecord = {
        certId: certId,
        workerId: worker.workerId,
        workerName: getLocalizedWorkerName(worker),
        orgId: worker.orgId,
        orgName: (worker.orgId === 'KAW-00001') ? t('demo_org_name') : (worker.orgName || 'Industrial Plant Unit'),
        moduleId: moduleId,
        moduleName: t(mod.titleKey) || mod.title,
        score: finalScore,
        status: 'PASSED',
        cryptoHash: cryptoHash,
        issuedAt: now.toISOString(),
        issueDateText: dateFormatted,
        isOfflinePending: isOfflineMode,
        syncStatus: isOfflineMode ? 'LOCAL_PENDING' : 'SYNCED'
      };

      worker.certId = certId;
      saveCertificateRecord(certRecord);
      latestGeneratedCertId = certId;

      if (isOfflineMode) {
        enqueueOfflineRecord('certificate', { cert: certRecord, worker: worker });
      }

      // Populate Certificate Screen DOM using centralized renderer
      populateCertificateCard(certRecord, false);

      navigateToPhoneScreen('screenCertificate');
      if (isOfflineMode) {
        showToast(`💾 Saved locally, pending sync (${finalScore}%).`, 'amber');
      } else {
        showToast(`🎉 Module Completed! Certificate ${certId} issued (${finalScore}%).`, 'success');
      }
    } else {
      // Below 75% (0/4, 1/4, or 2/4) -> Show Retake Required Screen (No Certificate)
      const failedScoreNumber = document.getElementById('failedScoreNumber');
      const failedCorrectCountText = document.getElementById('failedCorrectCountText');
      const failedWorkerName = document.getElementById('failedWorkerName');
      const failedModuleName = document.getElementById('failedModuleName');
      const failedOfflineBanner = document.getElementById('failedOfflineBanner');

      if (failedScoreNumber) failedScoreNumber.textContent = `${finalScore}%`;
      if (failedCorrectCountText) failedCorrectCountText.textContent = `${correctCount} of 4 Tasks`;
      if (failedWorkerName) failedWorkerName.textContent = `${getLocalizedWorkerName(worker)} (${worker.workerId})`;
      if (failedModuleName) failedModuleName.textContent = t(mod.titleKey) || mod.title;

      if (isOfflineMode) {
        enqueueOfflineRecord('retake', { worker: worker, score: finalScore });
        if (failedOfflineBanner) failedOfflineBanner.classList.remove('hidden');
      } else {
        if (failedOfflineBanner) failedOfflineBanner.classList.add('hidden');
      }

      navigateToPhoneScreen('screenTrainingResultFailed');
      if (isOfflineMode) {
        showToast(`💾 Attempt recorded locally (${finalScore}%). Retake when ready.`, 'amber');
      } else {
        showToast(`⚠️ Score: ${finalScore}% (75% required). Retake module to earn certificate.`, 'amber');
      }
    }

    updateWorkerRecord(worker);
    renderWorkersTable();
    renderCertAuditTable();
    renderCertQuickPills();
    updateMetrics();

    if (window.lucide) window.lucide.createIcons();
  }

  // Certificate Navigation Buttons
  const btnCertBackToModules = document.getElementById('btnCertBackToModules');
  const btnCertDone = document.getElementById('btnCertDone');
  const btnCertVerifyInAdmin = document.getElementById('btnCertVerifyInAdmin');

  if (btnCertBackToModules) {
    btnCertBackToModules.addEventListener('click', () => {
      stopCameraFeed();
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  if (btnCertDone) {
    btnCertDone.addEventListener('click', () => {
      stopCameraFeed();
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  if (btnCertVerifyInAdmin) {
    btnCertVerifyInAdmin.addEventListener('click', () => {
      stopCameraFeed();
      navigateToMainView('viewAdminPortal');
      switchAdminTab('verify');
      const inputCertLookup = document.getElementById('inputCertLookup');
      if (inputCertLookup && latestGeneratedCertId) {
        inputCertLookup.value = latestGeneratedCertId;
        handleCertLookup(latestGeneratedCertId);
      }
    });
  }

  // Retake Screen Navigation Buttons
  const btnRetakeModule = document.getElementById('btnRetakeModule');
  const btnFailedBackToModules = document.getElementById('btnFailedBackToModules');
  const btnFailedReturnModules = document.getElementById('btnFailedReturnModules');

  if (btnRetakeModule) {
    btnRetakeModule.addEventListener('click', () => {
      startARModule(currentActiveModuleId);
    });
  }

  if (btnFailedBackToModules) {
    btnFailedBackToModules.addEventListener('click', () => {
      stopCameraFeed();
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  if (btnFailedReturnModules) {
    btnFailedReturnModules.addEventListener('click', () => {
      stopCameraFeed();
      navigateToPhoneScreen('screenTrainingModules');
    });
  }

  // ==========================================
  // 8. ADMIN INDUSTRY REGISTRATION (POINT 3 FIX: ZERO DUPLICATE FIELDS)
  // ==========================================
  const heroRegisterBtn = document.getElementById('heroRegisterBtn');
  const openModalTableBtn = document.getElementById('openModalTableBtn');
  const emptyStateRegisterBtn = document.getElementById('emptyStateRegisterBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCancelBtn = document.getElementById('modalCancelBtn');
  const nextIdPreview = document.getElementById('nextIdPreview');
  const industryForm = document.getElementById('industryRegistrationForm');
  const formGlobalError = document.getElementById('formGlobalError');
  const formGlobalErrorMessage = document.getElementById('formGlobalErrorMessage');

  // Radio Choices for Registration Doc Type (Point 3)
  const radioTypeLicence = document.getElementById('radioTypeLicence');
  const radioTypeUdyam = document.getElementById('radioTypeUdyam');
  const labelRegTypeLicence = document.getElementById('labelRegTypeLicence');
  const labelRegTypeUdyam = document.getElementById('labelRegTypeUdyam');
  const singleRegDocLabelText = document.getElementById('singleRegDocLabelText');
  const singleRegDocIcon = document.getElementById('singleRegDocIcon');
  const regDocValueInput = document.getElementById('regDocValueInput');
  const singleRegDocHint = document.getElementById('singleRegDocHint');

  // Form Fields
  const fieldOrgName = document.getElementById('orgName');
  const fieldIndustryType = document.getElementById('industryType');
  const fieldLocation = document.getElementById('orgLocation');
  const deptCountSelected = document.getElementById('deptCountSelected');
  const deptCheckboxes = document.querySelectorAll('input[name="activeDepartments"]');
  const otherDeptCheckbox = document.getElementById('otherDeptCheckbox');
  const otherDeptContainer = document.getElementById('otherDeptContainer');
  const otherDeptInput = document.getElementById('otherDeptInput');
  const fieldAdminName = document.getElementById('adminName');
  const fieldAdminPhone = document.getElementById('adminPhone');
  const fieldAdminEmail = document.getElementById('adminEmail');

  // Success Modal Elements
  const successBackdrop = document.getElementById('successBackdrop');
  const successDoneBtn = document.getElementById('successDoneBtn');
  const successOrgId = document.getElementById('successOrgId');
  const summaryOrgName = document.getElementById('summaryOrgName');
  const summaryIndustryType = document.getElementById('summaryIndustryType');
  const summaryLocation = document.getElementById('summaryLocation');
  const summaryDocTypeLabel = document.getElementById('summaryDocTypeLabel');
  const summaryDocValue = document.getElementById('summaryDocValue');
  const summaryDeptsCount = document.getElementById('summaryDeptsCount');
  const summaryAdminName = document.getElementById('summaryAdminName');
  const copyIdBtn = document.getElementById('copyIdBtn');
  const copyText = document.getElementById('copyText');

  let currentDocTypeChoice = 'licence'; // 'licence' or 'udyam'

  function updateSingleRegFieldTypeUI() {
    if (currentDocTypeChoice === 'licence') {
      if (labelRegTypeLicence) labelRegTypeLicence.classList.add('active');
      if (labelRegTypeUdyam) labelRegTypeUdyam.classList.remove('active');
      if (radioTypeLicence) radioTypeLicence.checked = true;
      
      if (singleRegDocLabelText) {
        singleRegDocLabelText.setAttribute('data-i18n', 'lbl_reg_doc_licence');
        singleRegDocLabelText.textContent = t('lbl_reg_doc_licence');
      }
      if (regDocValueInput) {
        regDocValueInput.placeholder = t('ph_reg_licence');
      }
      if (singleRegDocHint) {
        singleRegDocHint.setAttribute('data-i18n', 'hint_reg_licence');
        singleRegDocHint.textContent = t('hint_reg_licence');
      }
      if (singleRegDocIcon) {
        singleRegDocIcon.setAttribute('data-lucide', 'file-check');
      }
    } else {
      if (labelRegTypeLicence) labelRegTypeLicence.classList.remove('active');
      if (labelRegTypeUdyam) labelRegTypeUdyam.classList.add('active');
      if (radioTypeUdyam) radioTypeUdyam.checked = true;

      if (singleRegDocLabelText) {
        singleRegDocLabelText.setAttribute('data-i18n', 'lbl_reg_doc_udyam');
        singleRegDocLabelText.textContent = t('lbl_reg_doc_udyam');
      }
      if (regDocValueInput) {
        regDocValueInput.placeholder = t('ph_reg_udyam');
      }
      if (singleRegDocHint) {
        singleRegDocHint.setAttribute('data-i18n', 'hint_reg_udyam');
        singleRegDocHint.textContent = t('hint_reg_udyam');
      }
      if (singleRegDocIcon) {
        singleRegDocIcon.setAttribute('data-lucide', 'award');
      }
    }
    if (window.lucide) window.lucide.createIcons();
  }

  if (radioTypeLicence) {
    radioTypeLicence.addEventListener('change', () => {
      currentDocTypeChoice = 'licence';
      updateSingleRegFieldTypeUI();
    });
  }

  if (radioTypeUdyam) {
    radioTypeUdyam.addEventListener('change', () => {
      currentDocTypeChoice = 'udyam';
      updateSingleRegFieldTypeUI();
    });
  }

  function updateDeptCounter() {
    const checked = document.querySelectorAll('input[name="activeDepartments"]:checked');
    if (deptCountSelected) deptCountSelected.textContent = checked.length;
    const errorMsg = document.getElementById('departmentsError');
    if (checked.length > 0 && errorMsg) {
      errorMsg.classList.remove('visible');
    }
  }

  deptCheckboxes.forEach(chk => {
    chk.addEventListener('change', () => {
      updateDeptCounter();
      if (chk === otherDeptCheckbox) {
        if (otherDeptCheckbox.checked) {
          if (otherDeptContainer) otherDeptContainer.classList.remove('hidden');
          setTimeout(() => otherDeptInput && otherDeptInput.focus(), 50);
        } else {
          if (otherDeptContainer) otherDeptContainer.classList.add('hidden');
          if (otherDeptInput) otherDeptInput.value = '';
          clearFieldError('otherDeptInput', 'otherDeptError');
        }
      }
    });
  });

  function openRegistrationModal() {
    if (nextIdPreview) nextIdPreview.textContent = getNextOrgId();
    clearAdminFormErrors();
    if (modalBackdrop) modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => fieldOrgName && fieldOrgName.focus(), 100);
    if (window.lucide) window.lucide.createIcons();
  }

  function closeRegistrationModal() {
    if (modalBackdrop) modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function clearAdminFormErrors() {
    if (formGlobalError) formGlobalError.classList.add('hidden');
    if (industryForm) {
      industryForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      industryForm.querySelectorAll('.field-error-msg.visible').forEach(el => el.classList.remove('visible'));
    }
  }

  if (heroRegisterBtn) heroRegisterBtn.addEventListener('click', openRegistrationModal);
  if (openModalTableBtn) openModalTableBtn.addEventListener('click', openRegistrationModal);
  if (emptyStateRegisterBtn) emptyStateRegisterBtn.addEventListener('click', openRegistrationModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeRegistrationModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeRegistrationModal);

  // Demo Auto-Fill Button on Industry Registration Form (Req 11)
  const btnDemoFillIndustry = document.getElementById('btnDemoFillIndustry');
  if (btnDemoFillIndustry) {
    btnDemoFillIndustry.addEventListener('click', () => {
      if (fieldOrgName) fieldOrgName.value = t('demo_org_name');
      if (fieldIndustryType) fieldIndustryType.value = 'Mining';
      if (fieldLocation) fieldLocation.value = t('demo_org_location');
      
      currentDocTypeChoice = 'licence';
      updateSingleRegFieldTypeUI();
      if (regDocValueInput) regDocValueInput.value = 'DGMS/MIN/2024/8892';
      
      const demoDepts = [
        'Mining / Extraction Operations',
        'Plant / Equipment Operations',
        'Safety / HSE (Health, Safety & Environment)',
        'Maintenance'
      ];
      deptCheckboxes.forEach(chk => {
        chk.checked = demoDepts.includes(chk.value);
      });
      if (otherDeptCheckbox) otherDeptCheckbox.checked = false;
      if (otherDeptContainer) otherDeptContainer.classList.add('hidden');
      if (otherDeptInput) otherDeptInput.value = '';
      updateDeptCounter();

      if (fieldAdminName) fieldAdminName.value = t('demo_admin_name');
      if (fieldAdminPhone) fieldAdminPhone.value = '9876543210';
      if (fieldAdminEmail) fieldAdminEmail.value = 'safety.officer@bharatmining.com';

      clearAdminFormErrors();
      showToast(t('toast_demo_facility_filled'), 'info');
    });
  }

  // Industry Registration Submission (Point 3)
  if (industryForm) {
    industryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const errors = [];

      if (!fieldOrgName.value || fieldOrgName.value.trim() === '') {
        showFieldError('orgName', 'orgNameError', t('err_org_name'));
        isValid = false;
        errors.push('Organization Name');
      } else {
        clearFieldError('orgName', 'orgNameError');
      }

      if (!fieldIndustryType.value) {
        showFieldError('industryType', 'industryTypeError', t('err_industry_type'));
        isValid = false;
        errors.push('Industry Type');
      } else {
        clearFieldError('industryType', 'industryTypeError');
      }

      if (!fieldLocation.value || fieldLocation.value.trim() === '') {
        showFieldError('orgLocation', 'orgLocationError', t('err_location'));
        isValid = false;
        errors.push('Location');
      } else {
        clearFieldError('orgLocation', 'orgLocationError');
      }

      // Point 3: Single field validation (accept any 10-digit number or alphanumeric format)
      const docVal = regDocValueInput ? regDocValueInput.value.trim() : '';
      if (!docVal) {
        showFieldError('regDocValueInput', 'regDocValueError', t('err_reg_doc_value'));
        isValid = false;
        errors.push('Registration Document Number');
      } else {
        clearFieldError('regDocValueInput', 'regDocValueError');
      }

      const checkedBoxes = Array.from(document.querySelectorAll('input[name="activeDepartments"]:checked'));
      const deptError = document.getElementById('departmentsError');
      if (checkedBoxes.length === 0) {
        if (deptError) deptError.classList.add('visible');
        isValid = false;
        errors.push('At least one Active Department');
      } else {
        if (deptError) deptError.classList.remove('visible');
      }

      if (otherDeptCheckbox && otherDeptCheckbox.checked) {
        const customVal = otherDeptInput ? otherDeptInput.value.trim() : '';
        if (!customVal) {
          showFieldError('otherDeptInput', 'otherDeptError', 'Please enter custom department name.');
          isValid = false;
          errors.push('Custom Department Name');
        } else {
          clearFieldError('otherDeptInput', 'otherDeptError');
        }
      }

      if (!fieldAdminName.value || fieldAdminName.value.trim() === '') {
        showFieldError('adminName', 'adminNameError', t('err_officer_name'));
        isValid = false;
        errors.push('Admin Name');
      } else {
        clearFieldError('adminName', 'adminNameError');
      }

      const phoneVal = fieldAdminPhone.value ? fieldAdminPhone.value.trim() : '';
      if (!phoneVal || phoneVal.replace(/\D/g, '').length < 8) {
        showFieldError('adminPhone', 'adminPhoneError', t('err_contact_number'));
        isValid = false;
        errors.push('Contact Number');
      } else {
        clearFieldError('adminPhone', 'adminPhoneError');
      }

      const emailVal = fieldAdminEmail.value ? fieldAdminEmail.value.trim() : '';
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        showFieldError('adminEmail', 'adminEmailError', t('err_official_email'));
        isValid = false;
        errors.push('Official Email');
      } else {
        clearFieldError('adminEmail', 'adminEmailError');
      }

      if (!isValid) {
        if (formGlobalErrorMessage) formGlobalErrorMessage.textContent = `Please complete: ${errors.join(', ')}.`;
        if (formGlobalError) formGlobalError.classList.remove('hidden');
        const modalScrollable = document.querySelector('.modal-body-scrollable');
        if (modalScrollable) modalScrollable.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const selectedDepts = checkedBoxes.map(cb => {
        if (cb.value === 'Other') {
          const custom = otherDeptInput ? otherDeptInput.value.trim() : '';
          return custom ? `Other: ${custom}` : 'Other';
        }
        return cb.value;
      });

      const newOrgId = allocateNextOrgId();
      const docLabel = currentDocTypeChoice === 'licence' ? 'Registration / Licence Number' : 'Udyam Registration Number';

      const registrationRecord = {
        id: newOrgId,
        orgName: fieldOrgName.value.trim(),
        industryType: fieldIndustryType.value,
        location: fieldLocation.value.trim(),
        docType: currentDocTypeChoice,
        docLabel: docLabel,
        docValue: docVal,
        departments: selectedDepts,
        adminName: fieldAdminName.value.trim(),
        adminPhone: fieldAdminPhone.value.trim(),
        adminEmail: fieldAdminEmail.value.trim(),
        registeredAt: new Date().toISOString()
      };

      saveRegistrationRecord(registrationRecord);

      // Reset form
      industryForm.reset();
      currentDocTypeChoice = 'licence';
      updateSingleRegFieldTypeUI();
      if (otherDeptContainer) otherDeptContainer.classList.add('hidden');
      updateDeptCounter();

      closeRegistrationModal();
      openFacilitySuccessModal(registrationRecord);

      renderRegistryTable();
      updateMetrics();
      populateWorkerLoginOrgDropdown(newOrgId);
      populateAdminWorkerOrgDropdown(newOrgId);

      showToast(`Facility registered with ID ${newOrgId}`, 'success');
    });
  }

  function openFacilitySuccessModal(record) {
    if (successOrgId) successOrgId.textContent = record.id;
    if (summaryOrgName) summaryOrgName.textContent = getLocalizedOrgName(record);
    if (summaryIndustryType) summaryIndustryType.textContent = record.industryType;
    if (summaryLocation) summaryLocation.textContent = getLocalizedOrgLocation(record);
    if (summaryDocTypeLabel) summaryDocTypeLabel.textContent = record.docLabel || 'Registration Document';
    if (summaryDocValue) summaryDocValue.textContent = record.docValue || '—';
    if (summaryDeptsCount) summaryDeptsCount.textContent = `${record.departments.length} department(s) active`;
    if (summaryAdminName) summaryAdminName.textContent = `${getLocalizedAdminName(record)} (${record.adminPhone})`;

    if (successBackdrop) successBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  if (successDoneBtn) {
    successDoneBtn.addEventListener('click', () => {
      if (successBackdrop) successBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // ==========================================
  // 9. ADMIN "ADD WORKERS" & WORKFORCE REGISTRY (POINT 4)
  // ==========================================
  const heroAddWorkerBtn = document.getElementById('heroAddWorkerBtn');
  const openAddWorkerModalBtn = document.getElementById('openAddWorkerModalBtn');
  const emptyStateAddWorkerBtn = document.getElementById('emptyStateAddWorkerBtn');
  const addWorkerModalBackdrop = document.getElementById('addWorkerModalBackdrop');
  const closeAddWorkerModalBtn = document.getElementById('closeAddWorkerModalBtn');
  const cancelAddWorkerBtn = document.getElementById('cancelAddWorkerBtn');
  const nextWorkerIdPreview = document.getElementById('nextWorkerIdPreview');
  const adminAddWorkerForm = document.getElementById('adminAddWorkerForm');
  const adminWorkerOrgSelect = document.getElementById('adminWorkerOrgSelect');
  const adminWorkerName = document.getElementById('adminWorkerName');
  const adminWorkerMobile = document.getElementById('adminWorkerMobile');
  const adminWorkerAddress = document.getElementById('adminWorkerAddress');
  const adminWorkerAadhaar = document.getElementById('adminWorkerAadhaar');
  const adminWorkerDeptsList = document.getElementById('adminWorkerDeptsList');
  const adminWorkerDeptCount = document.getElementById('adminWorkerDeptCount');
  const adminWorkerDeptsError = document.getElementById('adminWorkerDeptsError');
  const adminAddWorkerGlobalError = document.getElementById('adminAddWorkerGlobalError');
  const adminAddWorkerGlobalErrorMessage = document.getElementById('adminAddWorkerGlobalErrorMessage');

  // Worker Success Card Elements
  const workerSuccessBackdrop = document.getElementById('workerSuccessBackdrop');
  const modalGeneratedWorkerId = document.getElementById('modalGeneratedWorkerId');
  const modalWorkerFullName = document.getElementById('modalWorkerFullName');
  const modalWorkerOrgName = document.getElementById('modalWorkerOrgName');
  const modalWorkerMobile = document.getElementById('modalWorkerMobile');
  const modalWorkerDepts = document.getElementById('modalWorkerDepts');
  const copyWorkerIdBtn = document.getElementById('copyWorkerIdBtn');
  const copyWorkerText = document.getElementById('copyWorkerText');
  const workerSuccessDoneBtn = document.getElementById('workerSuccessDoneBtn');

  function openAddWorkerModal() {
    if (nextWorkerIdPreview) nextWorkerIdPreview.textContent = getNextWorkerId();
    if (adminAddWorkerForm) adminAddWorkerForm.reset();
    if (adminAddWorkerGlobalError) adminAddWorkerGlobalError.classList.add('hidden');
    clearFieldError('adminWorkerOrgSelect', 'adminWorkerOrgSelectError');
    clearFieldError('adminWorkerName', 'adminWorkerNameError');
    clearFieldError('adminWorkerMobile', 'adminWorkerMobileError');
    clearFieldError('adminWorkerAddress', 'adminWorkerAddressError');
    if (adminWorkerDeptsError) adminWorkerDeptsError.classList.remove('visible');

    populateAdminWorkerOrgDropdown();
    renderAdminWorkerDeptCheckboxes('');

    if (addWorkerModalBackdrop) addWorkerModalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => adminWorkerName && adminWorkerName.focus(), 100);
    if (window.lucide) window.lucide.createIcons();
  }

  function closeAddWorkerModal() {
    if (addWorkerModalBackdrop) addWorkerModalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (heroAddWorkerBtn) heroAddWorkerBtn.addEventListener('click', openAddWorkerModal);
  if (openAddWorkerModalBtn) openAddWorkerModalBtn.addEventListener('click', openAddWorkerModal);
  if (emptyStateAddWorkerBtn) emptyStateAddWorkerBtn.addEventListener('click', openAddWorkerModal);
  if (closeAddWorkerModalBtn) closeAddWorkerModalBtn.addEventListener('click', closeAddWorkerModal);
  if (cancelAddWorkerBtn) cancelAddWorkerBtn.addEventListener('click', closeAddWorkerModal);

  // Demo Auto-Fill Button on Admin Add Worker Form (Req 11)
  const btnDemoFillWorker = document.getElementById('btnDemoFillWorker');
  if (btnDemoFillWorker) {
    btnDemoFillWorker.addEventListener('click', () => {
      let orgs = getStoredRegistrations();
      let demoOrg = orgs.find(o => o.id === 'KAW-00001');
      if (!demoOrg) {
        demoOrg = {
          id: "KAW-00001",
          orgName: t('demo_org_name'),
          industryType: "Mining",
          location: t('demo_org_location'),
          docType: "licence",
          docLabel: "Registration / Licence Number",
          docValue: "DGMS/MIN/2024/8892",
          departments: [
            "Mining / Extraction Operations",
            "Plant / Equipment Operations",
            "Safety / HSE (Health, Safety & Environment)",
            "Maintenance"
          ],
          adminName: t('demo_admin_name'),
          adminPhone: "+91 98765 43210",
          adminEmail: "safety.officer@bharatmining.com",
          registeredAt: new Date().toISOString()
        };
        saveRegistrationRecord(demoOrg);
      }
      populateAdminWorkerOrgDropdown('KAW-00001');

      if (adminWorkerOrgSelect) {
        adminWorkerOrgSelect.value = 'KAW-00001';
        renderAdminWorkerDeptCheckboxes('KAW-00001');
        
        setTimeout(() => {
          const chks = adminWorkerDeptsList ? adminWorkerDeptsList.querySelectorAll('.admin-dept-chk') : [];
          chks.forEach((chk, i) => {
            if (i < 2) {
              chk.checked = true;
              chk.closest('.admin-worker-dept-option')?.classList.add('selected');
            }
          });
          const count = adminWorkerDeptsList ? adminWorkerDeptsList.querySelectorAll('input[type="checkbox"]:checked').length : 0;
          if (adminWorkerDeptCount) adminWorkerDeptCount.textContent = `${count} selected`;
          if (count > 0 && adminWorkerDeptsError) adminWorkerDeptsError.classList.remove('visible');
        }, 50);
      }

      if (adminWorkerName) adminWorkerName.value = t('demo_worker_name');
      if (adminWorkerMobile) adminWorkerMobile.value = '9876543210';
      if (adminWorkerAddress) adminWorkerAddress.value = t('demo_worker_address');
      if (adminWorkerAadhaar) adminWorkerAadhaar.value = 'XXXX-XXXX-4812';

      if (adminAddWorkerGlobalError) adminAddWorkerGlobalError.classList.add('hidden');
      clearFieldError('adminWorkerOrgSelect', 'adminWorkerOrgSelectError');
      clearFieldError('adminWorkerName', 'adminWorkerNameError');
      clearFieldError('adminWorkerMobile', 'adminWorkerMobileError');
      clearFieldError('adminWorkerAddress', 'adminWorkerAddressError');

      showToast(t('toast_demo_worker_filled'), 'info');
    });
  }

  function populateAdminWorkerOrgDropdown(selectedId = '') {
    if (!adminWorkerOrgSelect) return;
    const orgs = getStoredRegistrations();
    orgs.sort((a, b) => (a.id || '').localeCompare(b.id || '', undefined, { numeric: true }));

    adminWorkerOrgSelect.innerHTML = `<option value="" disabled ${!selectedId ? 'selected' : ''}>${t('opt_select_facility_scope')}</option>`;
    orgs.forEach(org => {
      const opt = document.createElement('option');
      opt.value = org.id;
      opt.textContent = `${getLocalizedOrgName(org)} (${org.id})`;
      if (selectedId && org.id === selectedId) {
        opt.selected = true;
      }
      adminWorkerOrgSelect.appendChild(opt);
    });

    if (selectedId) {
      renderAdminWorkerDeptCheckboxes(selectedId);
    }
  }

  function renderAdminWorkerDeptCheckboxes(orgId) {
    if (!adminWorkerDeptsList) return;
    const orgs = getStoredRegistrations();
    const matchedOrg = orgs.find(o => o.id === orgId);

    if (!matchedOrg || !matchedOrg.departments || matchedOrg.departments.length === 0) {
      adminWorkerDeptsList.innerHTML = `
        <div class="text-xs text-slate-500 italic p-2 col-span-2">Select a registered facility above to load its operational departments.</div>
      `;
      if (adminWorkerDeptCount) adminWorkerDeptCount.textContent = '0 selected';
      return;
    }

    adminWorkerDeptsList.innerHTML = matchedOrg.departments.map((dept, idx) => `
      <label class="admin-worker-dept-option" for="adminWorkerDept_${idx}">
        <input type="checkbox" id="adminWorkerDept_${idx}" name="adminWorkerDepartments" value="${dept}" class="admin-dept-chk">
        <span>${dept}</span>
      </label>
    `).join('');

    adminWorkerDeptsList.querySelectorAll('.admin-dept-chk').forEach(chk => {
      chk.addEventListener('change', () => {
        chk.closest('.admin-worker-dept-option')?.classList.toggle('selected', chk.checked);
        const count = adminWorkerDeptsList.querySelectorAll('input[type="checkbox"]:checked').length;
        if (adminWorkerDeptCount) adminWorkerDeptCount.textContent = `${count} selected`;
        if (count > 0 && adminWorkerDeptsError) adminWorkerDeptsError.classList.remove('visible');
      });
    });

    if (adminWorkerDeptCount) adminWorkerDeptCount.textContent = '0 selected';
  }

  if (adminWorkerOrgSelect) {
    adminWorkerOrgSelect.addEventListener('change', (e) => {
      clearFieldError('adminWorkerOrgSelect', 'adminWorkerOrgSelectError');
      renderAdminWorkerDeptCheckboxes(e.target.value);
    });
  }

  // Admin Add Worker Form Submission
  if (adminAddWorkerForm) {
    adminAddWorkerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const errors = [];

      const selectedOrgId = adminWorkerOrgSelect ? adminWorkerOrgSelect.value : '';
      if (!selectedOrgId) {
        showFieldError('adminWorkerOrgSelect', 'adminWorkerOrgSelectError', t('err_select_facility'));
        isValid = false;
        errors.push('Assigned Facility');
      } else {
        clearFieldError('adminWorkerOrgSelect', 'adminWorkerOrgSelectError');
      }

      const nameVal = adminWorkerName ? adminWorkerName.value.trim() : '';
      if (!nameVal) {
        showFieldError('adminWorkerName', 'adminWorkerNameError', t('err_worker_name'));
        isValid = false;
        errors.push('Worker Name');
      } else {
        clearFieldError('adminWorkerName', 'adminWorkerNameError');
      }

      const mobileVal = adminWorkerMobile ? adminWorkerMobile.value.trim().replace(/\D/g, '') : '';
      if (!mobileVal || mobileVal.length !== 10) {
        showFieldError('adminWorkerMobile', 'adminWorkerMobileError', t('err_mobile_number'));
        isValid = false;
        errors.push('10-digit Mobile Number');
      } else {
        clearFieldError('adminWorkerMobile', 'adminWorkerMobileError');
      }

      const addressVal = adminWorkerAddress ? adminWorkerAddress.value.trim() : '';
      if (!addressVal) {
        showFieldError('adminWorkerAddress', 'adminWorkerAddressError', t('err_address'));
        isValid = false;
        errors.push('Residential Address');
      } else {
        clearFieldError('adminWorkerAddress', 'adminWorkerAddressError');
      }

      const checkedDepts = Array.from(adminWorkerDeptsList.querySelectorAll('input[name="adminWorkerDepartments"]:checked'));
      if (checkedDepts.length === 0) {
        if (adminWorkerDeptsError) adminWorkerDeptsError.classList.add('visible');
        isValid = false;
        errors.push('At least one Assigned Department');
      } else {
        if (adminWorkerDeptsError) adminWorkerDeptsError.classList.remove('visible');
      }

      if (!isValid) {
        if (adminAddWorkerGlobalError) {
          adminAddWorkerGlobalErrorMessage.textContent = `Please complete: ${errors.join(', ')}.`;
          adminAddWorkerGlobalError.classList.remove('hidden');
        }
        return;
      }

      const orgs = getStoredRegistrations();
      const matchedOrg = orgs.find(o => o.id === selectedOrgId);
      const newWorkerId = allocateNextWorkerId();

      const workerRecord = {
        workerId: newWorkerId,
        orgId: selectedOrgId,
        orgName: matchedOrg ? matchedOrg.orgName : 'Registered Facility',
        fullName: nameVal,
        mobile: mobileVal,
        address: addressVal,
        aadhaar: (adminWorkerAadhaar && adminWorkerAadhaar.value.trim()) || 'XXXX-XXXX-XXXX',
        departments: checkedDepts.map(cb => cb.value),
        passwordSet: false, // Will set on 1st login
        password: null,
        createdAt: new Date().toISOString()
      };

      saveWorkerRecord(workerRecord);

      closeAddWorkerModal();
      openWorkerSuccessModal(workerRecord);

      renderWorkersTable();
      updateMetrics();
      showToast(`Worker enrolled: ${newWorkerId} (${nameVal})`, 'success');
    });
  }

  function openWorkerSuccessModal(worker) {
    if (modalGeneratedWorkerId) modalGeneratedWorkerId.textContent = worker.workerId;
    if (modalWorkerFullName) modalWorkerFullName.textContent = getLocalizedWorkerName(worker);
    
    const orgs = getStoredRegistrations();
    const matchedOrg = orgs.find(o => o.id === worker.orgId);
    if (modalWorkerOrgName) {
      modalWorkerOrgName.textContent = matchedOrg ? getLocalizedOrgName(matchedOrg) : (worker.orgId === 'KAW-00001' ? t('demo_org_name') : worker.orgName);
    }
    if (modalWorkerMobile) modalWorkerMobile.textContent = `+91 ${worker.mobile}`;
    if (modalWorkerDepts) modalWorkerDepts.textContent = worker.departments.join(', ');

    if (workerSuccessBackdrop) workerSuccessBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }

  if (workerSuccessDoneBtn) {
    workerSuccessDoneBtn.addEventListener('click', () => {
      if (workerSuccessBackdrop) workerSuccessBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Copy Buttons
  function wireCopyButton(btnId, targetElId, textElId) {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetElId);
    const textEl = document.getElementById(textElId);
    if (!btn || !target) return;

    btn.addEventListener('click', async () => {
      const textToCopy = target.textContent;
      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      if (textEl) {
        textEl.textContent = 'Copied!';
        setTimeout(() => { textEl.textContent = t('btn_copy'); }, 2000);
      }
    });
  }

  wireCopyButton('copyIdBtn', 'successOrgId', 'copyText');
  wireCopyButton('copyWorkerIdBtn', 'modalGeneratedWorkerId', 'copyWorkerText');

  // Password Visibility Toggles
  function wirePasswordToggle(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    if (!btn || !input) return;

    btn.addEventListener('click', () => {
      const isPwd = input.type === 'password';
      input.type = isPwd ? 'text' : 'password';
      btn.innerHTML = isPwd ? '<i data-lucide="eye-off" class="pwd-eye-icon"></i>' : '<i data-lucide="eye" class="pwd-eye-icon"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
  }

  wirePasswordToggle('toggleLoginPwdBtn', 'loginPassword');
  wirePasswordToggle('toggleLoginConfirmPwdBtn', 'loginConfirmPassword');

  // ==========================================
  // 10. ADMIN DASHBOARD TABLES & METRICS
  // ==========================================
  const tabBtnFacilities = document.getElementById('tabBtnFacilities');
  const tabBtnWorkers = document.getElementById('tabBtnWorkers');
  const tabBtnVerifyCert = document.getElementById('tabBtnVerifyCert');
  const sectionFacilities = document.getElementById('sectionFacilities');
  const sectionWorkers = document.getElementById('sectionWorkers');
  const sectionVerifyCert = document.getElementById('sectionVerifyCert');
  const badgeFacilityCount = document.getElementById('badgeFacilityCount');
  const badgeWorkerCount = document.getElementById('badgeWorkerCount');
  const badgeCertCount = document.getElementById('badgeCertCount');
  const certRegistryCountText = document.getElementById('certRegistryCountText');
  const certAuditTable = document.getElementById('certAuditTable');
  const verifyCertForm = document.getElementById('verifyCertForm');
  const inputCertLookup = document.getElementById('inputCertLookup');
  const certQuickPills = document.getElementById('certQuickPills');
  const certVerificationResultContainer = document.getElementById('certVerificationResultContainer');

  function switchAdminTab(tab) {
    if (tab === 'facilities') {
      if (tabBtnFacilities) tabBtnFacilities.classList.add('active');
      if (tabBtnWorkers) tabBtnWorkers.classList.remove('active');
      if (tabBtnVerifyCert) tabBtnVerifyCert.classList.remove('active');
      if (sectionFacilities) sectionFacilities.classList.remove('hidden');
      if (sectionWorkers) sectionWorkers.classList.add('hidden');
      if (sectionVerifyCert) sectionVerifyCert.classList.add('hidden');
    } else if (tab === 'workers') {
      if (tabBtnFacilities) tabBtnFacilities.classList.remove('active');
      if (tabBtnWorkers) tabBtnWorkers.classList.add('active');
      if (tabBtnVerifyCert) tabBtnVerifyCert.classList.remove('active');
      if (sectionFacilities) sectionFacilities.classList.add('hidden');
      if (sectionWorkers) sectionWorkers.classList.remove('hidden');
      if (sectionVerifyCert) sectionVerifyCert.classList.add('hidden');
    } else if (tab === 'verify') {
      if (tabBtnFacilities) tabBtnFacilities.classList.remove('active');
      if (tabBtnWorkers) tabBtnWorkers.classList.remove('active');
      if (tabBtnVerifyCert) tabBtnVerifyCert.classList.add('active');
      if (sectionFacilities) sectionFacilities.classList.add('hidden');
      if (sectionWorkers) sectionWorkers.classList.add('hidden');
      if (sectionVerifyCert) sectionVerifyCert.classList.remove('hidden');
      renderCertAuditTable();
      renderCertQuickPills();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  if (tabBtnFacilities) tabBtnFacilities.addEventListener('click', () => switchAdminTab('facilities'));
  if (tabBtnWorkers) tabBtnWorkers.addEventListener('click', () => switchAdminTab('workers'));
  if (tabBtnVerifyCert) tabBtnVerifyCert.addEventListener('click', () => switchAdminTab('verify'));

  const btnAdminClearAllData = document.getElementById('btnAdminClearAllData');
  if (btnAdminClearAllData) {
    btnAdminClearAllData.addEventListener('click', () => {
      resetAllSystemData(true);
    });
  }

  function renderCertAuditTable() {
    const tableBody = certAuditTable ? certAuditTable.querySelector('tbody') : null;
    if (!tableBody) return;

    const certs = getStoredCertificates();
    if (certRegistryCountText) certRegistryCountText.textContent = `${certs.length} Records Signed`;
    if (badgeCertCount) badgeCertCount.textContent = certs.length;

    if (certs.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-6 text-slate-400 italic">
            No certificates issued yet. Complete training modules in the worker app to generate certificates.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = certs.map(c => `
      <tr>
        <td>
          <span class="font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">${c.certId}</span>
        </td>
        <td>
          <div class="font-bold text-slate-900">${c.workerName}</div>
          <div class="text-xs text-slate-500 font-mono">${c.workerId}</div>
        </td>
        <td class="text-xs text-slate-700 font-medium">${c.orgName}</td>
        <td>
          <span class="badge-status-active"><i data-lucide="award" class="w-3 h-3 inline text-emerald-600"></i> ${c.moduleName}</span>
        </td>
        <td>
          <span class="cert-result-pill-inline text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs font-bold border border-emerald-200">
            ${c.score}% • ${c.status}
          </span>
        </td>
        <td class="text-xs text-slate-500 font-mono">${c.issueDateText || new Date(c.issuedAt).toLocaleDateString()}</td>
        <td>
          <div class="flex items-center gap-1.5">
            <button type="button" class="btn-xs btn-amber cert-audit-view-btn" data-id="${c.certId}" title="View Digital Certificate & QR Code">
              <i data-lucide="award" class="w-3.5 h-3.5 inline"></i> <span data-i18n="btn_view_cert">${t('btn_view_cert') || 'View Cert'}</span>
            </button>
            <button type="button" class="btn-xs btn-subtle cert-audit-verify-btn" data-id="${c.certId}" title="Verify in audit log">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 inline"></i> <span data-i18n="btn_verify">${t('btn_verify') || 'Verify'}</span>
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    tableBody.querySelectorAll('.cert-audit-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openAdminCertModal(id);
      });
    });

    tableBody.querySelectorAll('.cert-audit-verify-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (inputCertLookup) inputCertLookup.value = id;
        handleCertLookup(id);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function renderCertQuickPills() {
    if (!certQuickPills) return;
    const certs = getStoredCertificates();
    if (certs.length === 0) {
      certQuickPills.innerHTML = `<span class="text-xs text-slate-400 italic" data-i18n="hint_no_issued_certs">${t('hint_no_issued_certs')}</span>`;
      return;
    }

    certQuickPills.innerHTML = certs.slice(0, 4).map(c => `
      <button type="button" class="verify-quick-pill" data-id="${c.certId}">
        <i data-lucide="qr-code" class="w-3 h-3 inline"></i> ${c.certId} (${c.workerName.split(' ')[0]})
      </button>
    `).join('');

    certQuickPills.querySelectorAll('.verify-quick-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const id = pill.getAttribute('data-id');
        if (inputCertLookup) inputCertLookup.value = id;
        handleCertLookup(id);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function handleCertLookup(certId) {
    if (!certVerificationResultContainer) return;
    const cert = findCertificateById(certId);

    if (!cert) {
      certVerificationResultContainer.className = 'verify-result-container';
      certVerificationResultContainer.classList.remove('hidden');
      certVerificationResultContainer.innerHTML = `
        <div class="verify-alert-box error">
          <i data-lucide="alert-circle" class="w-5 h-5 text-red-600 flex-shrink-0"></i>
          <div>
            <div class="font-bold text-red-900">Certificate Not Found (${certId || 'Empty'})</div>
            <p class="text-xs text-red-700 mt-0.5">No verified DGMS safety record matching this Certificate ID was found in the decentralized ledger. Please verify the ID or complete a training module.</p>
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    certVerificationResultContainer.className = 'verify-result-container';
    certVerificationResultContainer.classList.remove('hidden');
    certVerificationResultContainer.innerHTML = `
      <div class="verify-success-card">
        <div class="verify-card-header">
          <div class="flex items-center gap-2">
            <span class="verify-verified-seal">
              <i data-lucide="badge-check" class="w-5 h-5 text-emerald-600"></i>
            </span>
            <div>
              <div class="font-bold text-slate-900 text-sm">DGMS SAFETY CERTIFICATE VERIFIED AUTHENTIC</div>
              <div class="text-xs text-emerald-700 font-semibold font-mono">Status: ACTIVE & COMPLIANT</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right">
              <div class="text-xs text-slate-500 font-mono">Issued Timestamp</div>
              <div class="text-xs font-bold text-slate-800 font-mono">${cert.issueDateText || new Date(cert.issuedAt).toLocaleDateString()}</div>
            </div>
            <button type="button" class="btn-xs btn-amber view-lookup-cert-btn" data-id="${cert.certId}" title="View Full Digital Certificate & QR">
              <i data-lucide="award" class="w-3.5 h-3.5 inline"></i> View Certificate
            </button>
          </div>
        </div>

        <div class="verify-details-grid mt-3">
          <div class="verify-detail-item">
            <span class="detail-label">Certificate ID</span>
            <span class="detail-val font-mono text-sky-700 font-bold">${cert.certId}</span>
          </div>
          <div class="verify-detail-item">
            <span class="detail-label">Worker Name</span>
            <span class="detail-val font-bold text-slate-900">${cert.workerName} (${cert.workerId})</span>
          </div>
          <div class="verify-detail-item">
            <span class="detail-label">Industrial Facility</span>
            <span class="detail-val font-medium text-slate-800">${cert.orgName}</span>
          </div>
          <div class="verify-detail-item">
            <span class="detail-label">Certified Module</span>
            <span class="detail-val font-bold text-amber-700">${cert.moduleName} (Score: ${cert.score}%)</span>
          </div>
          <div class="verify-detail-item col-span-2">
            <span class="detail-label">Cryptographic SHA-256 Hash</span>
            <span class="detail-val font-mono text-xs text-slate-600 break-all">${cert.cryptoHash}</span>
          </div>
        </div>
      </div>
    `;

    const viewBtn = certVerificationResultContainer.querySelector('.view-lookup-cert-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        openAdminCertModal(cert);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  if (verifyCertForm) {
    verifyCertForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = inputCertLookup ? inputCertLookup.value.trim() : '';
      if (!val) {
        showToast('Please enter a Certificate ID to verify', 'amber');
        return;
      }
      handleCertLookup(val);
    });
  }

  // Render Facilities Table
  const registryTableBody = document.getElementById('registryTableBody');
  const registryEmptyState = document.getElementById('registryEmptyState');
  const registrySearchInput = document.getElementById('registrySearchInput');

  function renderRegistryTable(query = '') {
    if (!registryTableBody) return;
    const records = getStoredRegistrations();
    records.sort((a, b) => (a.id || '').localeCompare(b.id || '', undefined, { numeric: true }));

    const q = query.toLowerCase().trim();
    const filtered = records.filter(r => {
      if (!q) return true;
      const orgName = getLocalizedOrgName(r);
      const loc = getLocalizedOrgLocation(r);
      const admin = getLocalizedAdminName(r);
      return (
        (r.id && r.id.toLowerCase().includes(q)) ||
        (orgName && orgName.toLowerCase().includes(q)) ||
        (r.orgName && r.orgName.toLowerCase().includes(q)) ||
        (r.industryType && r.industryType.toLowerCase().includes(q)) ||
        (loc && loc.toLowerCase().includes(q)) ||
        (r.location && r.location.toLowerCase().includes(q)) ||
        (r.docValue && r.docValue.toLowerCase().includes(q)) ||
        (admin && admin.toLowerCase().includes(q)) ||
        (r.adminName && r.adminName.toLowerCase().includes(q))
      );
    });

    if (filtered.length === 0) {
      registryTableBody.innerHTML = '';
      if (registryEmptyState) registryEmptyState.classList.remove('hidden');
      return;
    }

    if (registryEmptyState) registryEmptyState.classList.add('hidden');
    registryTableBody.innerHTML = filtered.map(r => {
      const deptChips = (r.departments || []).slice(0, 3).map(d => `<span class="dept-tag">${d}</span>`).join('');
      const moreCount = (r.departments || []).length > 3 ? `<span class="dept-tag font-semibold">+${r.departments.length - 3}</span>` : '';
      const docBadge = r.docType === 'udyam' 
        ? `<div class="text-xs font-mono text-slate-700"><strong>Udyam:</strong> ${r.docValue}</div>`
        : `<div class="text-xs font-mono text-slate-700"><strong>Licence:</strong> ${r.docValue}</div>`;

      const displayOrgName = getLocalizedOrgName(r);
      const displayLocation = getLocalizedOrgLocation(r);
      const displayAdmin = getLocalizedAdminName(r);

      return `
        <tr>
          <td>
            <span class="kaw-id-pill">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-amber-600"></i>
              ${r.id}
            </span>
          </td>
          <td>
            <div class="font-semibold text-slate-900">${displayOrgName}</div>
            <div class="text-xs text-slate-500"><i data-lucide="map-pin" class="w-3 h-3 inline"></i> ${displayLocation}</div>
          </td>
          <td>
            <span class="industry-pill industry-${r.industryType}">${r.industryType}</span>
          </td>
          <td>
            ${docBadge}
          </td>
          <td>
            <div class="dept-chips-cell">
              ${deptChips}
              ${moreCount}
            </div>
          </td>
          <td>
            <div class="text-xs font-semibold text-slate-900">${displayAdmin}</div>
            <div class="text-xs text-slate-500">${r.adminPhone}</div>
          </td>
          <td>
            <button class="btn-xs btn-subtle view-facility-btn" data-id="${r.id}" title="View facility summary">
              <i data-lucide="eye" class="w-3.5 h-3.5 inline"></i> View Pass
            </button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.view-facility-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const record = records.find(r => r.id === id);
        if (record) openFacilitySuccessModal(record);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (registrySearchInput) {
    registrySearchInput.addEventListener('input', (e) => {
      renderRegistryTable(e.target.value);
    });
  }

  // Render Workers Table
  const workersTableBody = document.getElementById('workersTableBody');
  const workersEmptyState = document.getElementById('workersEmptyState');
  const workerSearchInput = document.getElementById('workerSearchInput');

  function renderWorkersTable(query = '') {
    if (!workersTableBody) return;
    const workers = getStoredWorkers();
    const orgs = getStoredRegistrations();
    workers.sort((a, b) => (a.workerId || '').localeCompare(b.workerId || '', undefined, { numeric: true }));

    const q = query.toLowerCase().trim();
    const filtered = workers.filter(w => {
      if (!q) return true;
      const workerName = getLocalizedWorkerName(w);
      const matchedOrg = orgs.find(o => o.id === w.orgId);
      const orgName = matchedOrg ? getLocalizedOrgName(matchedOrg) : (w.orgId === 'KAW-00001' ? t('demo_org_name') : w.orgName);
      return (
        (w.workerId && w.workerId.toLowerCase().includes(q)) ||
        (workerName && workerName.toLowerCase().includes(q)) ||
        (w.fullName && w.fullName.toLowerCase().includes(q)) ||
        (orgName && orgName.toLowerCase().includes(q)) ||
        (w.orgName && w.orgName.toLowerCase().includes(q)) ||
        (w.mobile && w.mobile.includes(q))
      );
    });

    if (filtered.length === 0) {
      workersTableBody.innerHTML = '';
      if (workersEmptyState) workersEmptyState.classList.remove('hidden');
      return;
    }

    if (workersEmptyState) workersEmptyState.classList.add('hidden');
    workersTableBody.innerHTML = filtered.map(w => {
      const deptChips = (w.departments || []).slice(0, 2).map(d => `<span class="dept-tag">${d}</span>`).join('');
      const moreCount = (w.departments || []).length > 2 ? `<span class="dept-tag font-semibold">+${w.departments.length - 2}</span>` : '';
      const statusPill = w.passwordSet 
        ? `<span class="worker-status-badge active"><i data-lucide="check-circle" class="w-3 h-3"></i> Active</span>`
        : `<span class="worker-status-badge pending"><i data-lucide="clock" class="w-3 h-3"></i> Pending 1st Login</span>`;

      const displayWorkerName = getLocalizedWorkerName(w);
      const matchedOrg = orgs.find(o => o.id === w.orgId);
      const displayOrgName = matchedOrg ? getLocalizedOrgName(matchedOrg) : (w.orgId === 'KAW-00001' ? t('demo_org_name') : w.orgName);

      const isCertified = w.trainingStatus === 'Certified' || !!findCertificateForWorker(w.workerId);
      const score = w.trainingScore || (findCertificateForWorker(w.workerId) ? findCertificateForWorker(w.workerId).score : 100);

      let trainingStatusPill = `<span class="worker-status-badge not-attempted"><i data-lucide="minus-circle" class="w-3 h-3 inline"></i> ${t('status_not_attempted') || 'Not Attempted'}</span>`;
      if (isCertified) {
        trainingStatusPill = `<button type="button" class="worker-status-badge certified clickable-cert-badge view-worker-cert-btn" data-id="${w.workerId}" title="Click to view full digital certificate & QR code"><i data-lucide="award" class="w-3 h-3 inline"></i> ${t('status_certified') || 'Certified'} (${score}%)</button>`;
      } else if (w.trainingStatus === 'Retake') {
        trainingStatusPill = `<span class="worker-status-badge retake"><i data-lucide="alert-triangle" class="w-3 h-3 inline"></i> ${t('status_retake') || 'Retake'} (${w.trainingScore || 0}%)</span>`;
      }

      return `
        <tr>
          <td>
            <span class="worker-id-pill">
              <i data-lucide="id-card" class="w-3.5 h-3.5 text-blue-600"></i>
              ${w.workerId}
            </span>
          </td>
          <td>
            <div class="font-semibold text-slate-900">${displayWorkerName}</div>
          </td>
          <td>
            <div class="text-xs font-semibold text-slate-800">${displayOrgName}</div>
            <div class="text-xs text-slate-500 font-mono">${w.orgId}</div>
          </td>
          <td>
            <div class="font-mono text-xs text-slate-800">+91 ${w.mobile}</div>
          </td>
          <td>
            <div class="font-mono text-xs text-slate-500">${w.aadhaar || 'XXXX-XXXX-XXXX'}</div>
          </td>
          <td>
            <div>${deptChips}${moreCount}</div>
          </td>
          <td>
            ${trainingStatusPill}
          </td>
          <td>
            ${statusPill}
          </td>
          <td>
            <div class="flex items-center gap-1.5">
              ${isCertified ? `
                <button type="button" class="btn-xs btn-amber view-worker-cert-btn" data-id="${w.workerId}" title="View Digital Certificate & QR Code">
                  <i data-lucide="award" class="w-3.5 h-3.5 inline"></i> <span data-i18n="btn_view_cert">${t('btn_view_cert') || 'View Cert'}</span>
                </button>
              ` : ''}
              <button type="button" class="btn-xs btn-subtle view-worker-pass-btn" data-id="${w.workerId}" title="View credentials slip">
                <i data-lucide="eye" class="w-3.5 h-3.5 inline"></i> <span data-i18n="btn_view_slip">${t('btn_view_slip') || 'View Slip'}</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.view-worker-cert-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const worker = workers.find(w => w.workerId === id) || findWorkerById(id);
        openAdminCertModal(worker || id);
      });
    });

    document.querySelectorAll('.view-worker-pass-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const worker = workers.find(w => w.workerId === id) || findWorkerById(id);
        if (worker) openWorkerSuccessModal(worker);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (workerSearchInput) {
    workerSearchInput.addEventListener('input', (e) => {
      renderWorkersTable(e.target.value);
    });
  }

  function updateMetrics() {
    const records = getStoredRegistrations();
    const workers = getStoredWorkers();
    const certs = getStoredCertificates();
    
    const statTotalUnits = document.getElementById('statTotalUnits');
    const statTotalWorkers = document.getElementById('statTotalWorkers');
    const statActiveDepts = document.getElementById('statActiveDepts');

    if (statTotalUnits) statTotalUnits.textContent = records.length;
    if (badgeFacilityCount) badgeFacilityCount.textContent = records.length;
    
    if (statTotalWorkers) statTotalWorkers.textContent = workers.length;
    if (badgeWorkerCount) badgeWorkerCount.textContent = workers.length;

    if (badgeCertCount) badgeCertCount.textContent = certs.length;
    if (certRegistryCountText) certRegistryCountText.textContent = `${certs.length} Records Signed`;

    let totalDepts = 0;
    records.forEach(r => {
      totalDepts += r.departments ? r.departments.length : 0;
    });
    if (statActiveDepts) statActiveDepts.textContent = totalDepts;
  }

  // Field error helpers
  function showFieldError(fieldId, errorMsgId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorMsgId);
    if (field) field.classList.add('is-invalid');
    if (errorEl) {
      if (message) errorEl.textContent = message;
      errorEl.classList.add('visible');
    }
  }

  function clearFieldError(fieldId, errorMsgId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorMsgId);
    if (field) field.classList.remove('is-invalid');
    if (errorEl) errorEl.classList.remove('visible');
  }

  // Live input error clearing
  [
    { input: fieldOrgName, error: 'orgNameError' },
    { input: fieldIndustryType, error: 'industryTypeError' },
    { input: fieldLocation, error: 'orgLocationError' },
    { input: regDocValueInput, error: 'regDocValueError' },
    { input: fieldAdminName, error: 'adminNameError' },
    { input: fieldAdminPhone, error: 'adminPhoneError' },
    { input: fieldAdminEmail, error: 'adminEmailError' },
    { input: otherDeptInput, error: 'otherDeptError' },
    { input: adminWorkerName, error: 'adminWorkerNameError' },
    { input: adminWorkerMobile, error: 'adminWorkerMobileError' },
    { input: adminWorkerAddress, error: 'adminWorkerAddressError' },
    { input: loginPassword, error: 'loginPasswordError' },
    { input: loginConfirmPassword, error: 'loginConfirmPasswordError' }
  ].forEach(pair => {
    if (pair.input) {
      pair.input.addEventListener('input', () => {
        clearFieldError(pair.input.id, pair.error);
      });
    }
  });

  // Toast Engine
  function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'check-circle';
    if (type === 'amber') iconName = 'alert-triangle';
    if (type === 'info') iconName = 'info';

    toast.innerHTML = `
      <i data-lucide="${iconName}" class="toast-icon"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Modal Backdrop dismissals
  [
    { backdrop: modalBackdrop, closeFn: closeRegistrationModal },
    { backdrop: addWorkerModalBackdrop, closeFn: closeAddWorkerModal },
    { backdrop: successBackdrop, closeFn: () => { if (successBackdrop) successBackdrop.classList.add('hidden'); document.body.style.overflow = ''; } },
    { backdrop: workerSuccessBackdrop, closeFn: () => { if (workerSuccessBackdrop) workerSuccessBackdrop.classList.add('hidden'); document.body.style.overflow = ''; } },
    { backdrop: adminCertModalBackdrop, closeFn: closeAdminCertModal }
  ].forEach(item => {
    if (item.backdrop) {
      item.backdrop.addEventListener('click', (e) => {
        if (e.target === item.backdrop) item.closeFn();
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeRegistrationModal();
      closeAddWorkerModal();
      closeAdminCertModal();
      if (successBackdrop) successBackdrop.classList.add('hidden');
      if (workerSuccessBackdrop) workerSuccessBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // ==========================================
  // 11. INITIALIZATION ON LOAD
  // ==========================================
  applyLanguage(currentLang);
  updateMetrics();
  renderRegistryTable();
  renderWorkersTable();
  renderCertAuditTable();
  renderCertQuickPills();
  updateDeptCounter();
  populateWorkerLoginOrgDropdown();
  populateAdminWorkerOrgDropdown();

  // Initial screen: Landing/Welcome Screen (Point 1 requirement)
  navigateToMainView('viewLanding');
});
