import streamlit as st
import pandas as pd

# Page configuration
st.set_page_config(
    page_title="Engineering Resources Finder",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for modern dark theme
st.markdown("""
<style>
    /* Import Inter font */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    /* Global styles */
    * {
        font-family: 'Inter', sans-serif;
    }
    
    /* Main container */
    .main {
        background: linear-gradient(135deg, #0a0e27 0%, #1a1f4a 100%);
    }
    
    /* Header */
    .main-header {
        text-align: center;
        padding: 2rem 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }
    
    .subtitle {
        text-align: center;
        color: #cbd5e1;
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
    
    /* Cards */
    .card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 1.5rem;
        margin: 1rem 0;
        transition: all 0.3s ease;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
        border-color: rgba(99, 102, 241, 0.3);
    }
    
    /* Subject card */
    .subject-card {
        background: rgba(18, 23, 56, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        margin: 1rem 0;
    }
    
    .subject-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #f8fafc;
        margin-bottom: 0.5rem;
    }
    
    .subject-code {
        color: #6366f1;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    .subject-credits {
        background: rgba(99, 102, 241, 0.2);
        color: #a5b4fc;
        padding: 0.25rem 0.75rem;
        border-radius: 8px;
        font-size: 0.85rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
    
    /* Note items */
    .note-item {
        background: rgba(255, 255, 255, 0.05);
        padding: 1rem;
        border-radius: 8px;
        margin: 0.5rem 0;
        border: 1px solid transparent;
        transition: all 0.3s ease;
    }
    
    .note-item:hover {
        background: rgba(99, 102, 241, 0.1);
        border-color: #6366f1;
        transform: translateX(5px);
    }
    
    .note-title {
        color: #f8fafc;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }
    
    .note-desc {
        color: #94a3b8;
        font-size: 0.85rem;
    }
    
    .note-type {
        background: #6366f1;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    /* Buttons */
    .stButton > button {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 12px;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        width: 100%;
        transition: all 0.3s ease;
    }
    
    .stButton > button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(99, 102, 241, 0.4);
    }
    
    /* Sidebar */
    .css-1d391kg {
        background: rgba(10, 14, 39, 0.95);
    }
    
    /* Expander */
    .streamlit-expanderHeader {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        color: #f8fafc;
        font-weight: 600;
    }
    
    /* Select boxes */
    .stSelectbox > div > div {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);
        color: white;
    }
    
    /* Breadcrumb */
    .breadcrumb {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1rem;
        margin-bottom: 2rem;
        color: #cbd5e1;
    }
</style>
""", unsafe_allow_html=True)

# Database
DATABASE = {
    "colleges": [
        {"id": 1, "name": "MIT", "fullName": "Massachusetts Institute of Technology", 
         "description": "Premier institution for technology and engineering education"},
        {"id": 2, "name": "Stanford", "fullName": "Stanford University", 
         "description": "Leading research university with exceptional engineering programs"},
        {"id": 3, "name": "IIT Delhi", "fullName": "Indian Institute of Technology Delhi", 
         "description": "India's premier engineering and technology institute"}
    ],
    "branches": [
        {"id": 1, "collegeId": 1, "name": "Electrical Engineering", "code": "EEE", 
         "description": "Study of electricity, electronics, and electromagnetism"},
        {"id": 2, "collegeId": 1, "name": "Mechanical Engineering", "code": "MECH", 
         "description": "Design, analysis, and manufacturing of mechanical systems"},
        {"id": 3, "collegeId": 1, "name": "Computer Science", "code": "CSE", 
         "description": "Study of computation, algorithms, and software systems"},
        {"id": 4, "collegeId": 1, "name": "Civil Engineering", "code": "CIVIL", 
         "description": "Infrastructure design and construction management"},
        {"id": 5, "collegeId": 2, "name": "Electrical Engineering", "code": "EEE", 
         "description": "Advanced electrical systems and signal processing"},
        {"id": 6, "collegeId": 2, "name": "Computer Science", "code": "CSE", 
         "description": "Cutting-edge computing and AI research"},
        {"id": 7, "collegeId": 3, "name": "Electrical Engineering", "code": "EEE", 
         "description": "Power systems and electronics engineering"},
        {"id": 8, "collegeId": 3, "name": "Mechanical Engineering", "code": "MECH", 
         "description": "Thermal and mechanical systems engineering"}
    ],
    "subjects": [
        {"id": 1, "branchId": 1, "semesterId": 3, "name": "Digital Electronics", "code": "EEE301", 
         "description": "Fundamentals of digital circuits, logic gates, and digital system design", "credits": 4},
        {"id": 2, "branchId": 1, "semesterId": 3, "name": "Signals and Systems", "code": "EEE302", 
         "description": "Analysis of continuous and discrete-time signals and systems", "credits": 4},
        {"id": 3, "branchId": 1, "semesterId": 3, "name": "Electronic Circuits", "code": "EEE303", 
         "description": "Analog and digital electronic circuit analysis and design", "credits": 4},
        {"id": 4, "branchId": 1, "semesterId": 3, "name": "Electromagnetic Fields", "code": "EEE304", 
         "description": "Study of electric and magnetic fields and their applications", "credits": 3},
        {"id": 5, "branchId": 1, "semesterId": 1, "name": "Engineering Mathematics I", "code": "MATH101", 
         "description": "Calculus, differential equations, and linear algebra", "credits": 4},
        {"id": 6, "branchId": 1, "semesterId": 1, "name": "Engineering Physics", "code": "PHY101", 
         "description": "Fundamentals of physics for engineering applications", "credits": 4},
        {"id": 7, "branchId": 2, "semesterId": 3, "name": "Thermodynamics", "code": "MECH301", 
         "description": "Laws of thermodynamics and their engineering applications", "credits": 4},
        {"id": 8, "branchId": 2, "semesterId": 3, "name": "Fluid Mechanics", "code": "MECH302", 
         "description": "Study of fluid behavior and flow dynamics", "credits": 4},
        {"id": 9, "branchId": 3, "semesterId": 3, "name": "Data Structures", "code": "CSE301", 
         "description": "Advanced data structures and algorithm design", "credits": 4},
        {"id": 10, "branchId": 3, "semesterId": 3, "name": "Database Systems", "code": "CSE302", 
         "description": "Relational databases, SQL, and database design", "credits": 4}
    ],
    "notes": [
        {"id": 1, "subjectId": 1, "title": "Introduction to Digital Logic", 
         "description": "Comprehensive overview of digital logic gates and Boolean algebra", "type": "PDF"},
        {"id": 2, "subjectId": 1, "title": "Combinational Circuits", 
         "description": "Design and analysis of combinational logic circuits", "type": "PDF"},
        {"id": 3, "subjectId": 1, "title": "Sequential Circuits", 
         "description": "Flip-flops, counters, and sequential circuit design", "type": "PDF"},
        {"id": 4, "subjectId": 1, "title": "Digital Electronics Lab Manual", 
         "description": "Practical experiments and circuit implementations", "type": "PDF"},
        {"id": 5, "subjectId": 2, "title": "Fourier Transform", 
         "description": "Fourier series and transform analysis", "type": "PDF"},
        {"id": 6, "subjectId": 2, "title": "Laplace Transform", 
         "description": "Laplace transform and its applications", "type": "VIDEO"},
        {"id": 7, "subjectId": 3, "title": "Amplifier Design", 
         "description": "BJT and FET amplifier configurations", "type": "PDF"},
        {"id": 8, "subjectId": 4, "title": "Maxwell's Equations", 
         "description": "Fundamental electromagnetic field equations", "type": "PDF"},
        {"id": 9, "subjectId": 9, "title": "Trees and Graphs", 
         "description": "Graph algorithms and tree traversal methods", "type": "PDF"},
        {"id": 10, "subjectId": 10, "title": "SQL Fundamentals", 
         "description": "Database queries and normalization", "type": "PDF"}
    ]
}

# Initialize session state
if 'selected_college' not in st.session_state:
    st.session_state.selected_college = None
if 'selected_branch' not in st.session_state:
    st.session_state.selected_branch = None
if 'selected_semester' not in st.session_state:
    st.session_state.selected_semester = None

# Header
st.markdown('<h1 class="main-header">🎓 Engineering Resources Finder</h1>', unsafe_allow_html=True)
st.markdown('<p class="subtitle">Your gateway to comprehensive engineering study materials</p>', unsafe_allow_html=True)

# Breadcrumb
breadcrumb_parts = ["Home"]
if st.session_state.selected_college:
    breadcrumb_parts.append(st.session_state.selected_college['name'])
if st.session_state.selected_branch:
    breadcrumb_parts.append(st.session_state.selected_branch['name'])
if st.session_state.selected_semester:
    breadcrumb_parts.append(f"Semester {st.session_state.selected_semester}")

if len(breadcrumb_parts) > 1:
    st.markdown(f'<div class="breadcrumb">📍 {" › ".join(breadcrumb_parts)}</div>', unsafe_allow_html=True)

# Sidebar for navigation
with st.sidebar:
    st.markdown("### 🧭 Navigation")
    
    if st.button("🏠 Reset to Home", use_container_width=True):
        st.session_state.selected_college = None
        st.session_state.selected_branch = None
        st.session_state.selected_semester = None
        st.rerun()
    
    st.markdown("---")
    
    if st.session_state.selected_college:
        st.markdown(f"**College:** {st.session_state.selected_college['name']}")
    if st.session_state.selected_branch:
        st.markdown(f"**Branch:** {st.session_state.selected_branch['name']}")
    if st.session_state.selected_semester:
        st.markdown(f"**Semester:** {st.session_state.selected_semester}")
    
    st.markdown("---")
    st.markdown("### 📊 Stats")
    st.metric("Colleges", len(DATABASE['colleges']))
    st.metric("Branches", len(DATABASE['branches']))
    st.metric("Subjects", len(DATABASE['subjects']))

# Main content
if st.session_state.selected_semester:
    # Show subjects for selected semester
    st.markdown("## 📚 Subjects & Resources")
    
    subjects = [s for s in DATABASE['subjects'] 
                if s['branchId'] == st.session_state.selected_branch['id'] 
                and s['semesterId'] == st.session_state.selected_semester]
    
    if subjects:
        for subject in subjects:
            notes = [n for n in DATABASE['notes'] if n['subjectId'] == subject['id']]
            
            with st.expander(f"📖 {subject['name']} ({subject['code']})", expanded=False):
                col1, col2 = st.columns([3, 1])
                
                with col1:
                    st.markdown(f"**{subject['name']}**")
                    st.markdown(f"<span class='subject-code'>{subject['code']}</span>", unsafe_allow_html=True)
                    st.markdown(subject['description'])
                
                with col2:
                    st.markdown(f"<span class='subject-credits'>{subject['credits']} Credits</span>", unsafe_allow_html=True)
                
                if notes:
                    st.markdown(f"#### 📝 Available Resources ({len(notes)})")
                    for note in notes:
                        col1, col2 = st.columns([4, 1])
                        with col1:
                            st.markdown(f"**{note['title']}**")
                            st.caption(note['description'])
                        with col2:
                            st.markdown(f"<span class='note-type'>{note['type']}</span>", unsafe_allow_html=True)
                else:
                    st.info("No resources available yet.")
    else:
        st.info("No subjects available for this semester.")

elif st.session_state.selected_branch:
    # Show semester selection
    st.markdown("## 📅 Select Semester")
    
    cols = st.columns(4)
    for i in range(8):
        semester = i + 1
        with cols[i % 4]:
            if st.button(f"Semester {semester}", key=f"sem_{semester}", use_container_width=True):
                st.session_state.selected_semester = semester
                st.rerun()

elif st.session_state.selected_college:
    # Show branch selection
    st.markdown("## 🔧 Select Your Branch")
    
    branches = [b for b in DATABASE['branches'] if b['collegeId'] == st.session_state.selected_college['id']]
    
    cols = st.columns(2)
    for idx, branch in enumerate(branches):
        with cols[idx % 2]:
            if st.button(
                f"**{branch['name']}**\n\n{branch['code']}\n\n{branch['description']}", 
                key=f"branch_{branch['id']}", 
                use_container_width=True
            ):
                st.session_state.selected_branch = branch
                st.rerun()

else:
    # Show college selection
    st.markdown("## 🏛️ Select Your College")
    
    cols = st.columns(3)
    for idx, college in enumerate(DATABASE['colleges']):
        with cols[idx % 3]:
            st.markdown(f"""
            <div class="card">
                <h3>{college['name']}</h3>
                <p style="color: #94a3b8; font-size: 0.9rem;">{college['fullName']}</p>
                <p style="color: #cbd5e1; margin-top: 0.5rem;">{college['description']}</p>
            </div>
            """, unsafe_allow_html=True)
            
            if st.button("Select", key=f"college_{college['id']}", use_container_width=True):
                st.session_state.selected_college = college
                st.rerun()

# Footer
st.markdown("---")
st.markdown("""
<div style="text-align: center; color: #94a3b8; padding: 2rem 0;">
    <p>Made with ❤️ for engineering students worldwide</p>
    <p style="font-size: 0.85rem;">Engineering Resources Finder • 2026</p>
</div>
""", unsafe_allow_html=True)
