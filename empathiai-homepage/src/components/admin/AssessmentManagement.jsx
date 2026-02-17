import { useState } from 'react'
import { PlusIcon, TrashIcon, PencilIcon, DocumentPlusIcon } from '@heroicons/react/24/outline'

export default function AssessmentManagement() {
    const [assessments, setAssessments] = useState([
        {
            id: 1,
            title: 'Emotional Well-being Term 1',
            grade: '4th',
            subject: 'SEL',
            questions: [
                { id: 1, text: 'How are you feeling today?', type: 'scale', min: 1, max: 5 },
                { id: 2, text: 'Describe a moment you felt happy this week.', type: 'text' }
            ]
        },
        {
            id: 2,
            title: 'Social Skills Check-in',
            grade: '5th',
            subject: 'Social Studies',
            questions: []
        }
    ])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentAssessment, setCurrentAssessment] = useState(null)

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        grade: '',
        subject: '',
        questions: []
    })

    // Question Form State
    const [newQuestion, setNewQuestion] = useState({
        text: '',
        type: 'text',
        options: '' // Comma separated for UI simplicity
    })

    const openModal = (assessment = null) => {
        if (assessment) {
            setCurrentAssessment(assessment)
            setFormData({ ...assessment })
        } else {
            setCurrentAssessment(null)
            setFormData({ title: '', grade: '', subject: '', questions: [] })
        }
        setNewQuestion({ text: '', type: 'text', options: '' })
        setIsModalOpen(true)
    }

    const handleAddQuestion = () => {
        if (!newQuestion.text) return
        const question = {
            id: Date.now(),
            text: newQuestion.text,
            type: newQuestion.type,
            options: newQuestion.type === 'multiple_choice' ? newQuestion.options.split(',').map(s => s.trim()) : null
        }
        setFormData({ ...formData, questions: [...formData.questions, question] })
        setNewQuestion({ text: '', type: 'text', options: '' })
    }

    const handleDeleteQuestion = (qId) => {
        setFormData({ ...formData, questions: formData.questions.filter(q => q.id !== qId) })
    }

    const handleSaveAssessment = () => {
        if (currentAssessment) {
            setAssessments(assessments.map(a => a.id === currentAssessment.id ? { ...formData, id: a.id } : a))
        } else {
            setAssessments([...assessments, { ...formData, id: Date.now() }])
        }
        setIsModalOpen(false)
    }

    const handleDeleteAssessment = (id) => {
        if (window.confirm('Delete this assessment?')) {
            setAssessments(assessments.filter(a => a.id !== id))
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Manage Assessments</h3>
                <button
                    onClick={() => openModal()}
                    className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    <DocumentPlusIcon className="w-5 h-5 mr-2" />
                    Create Assessment
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {assessments.map((assessment) => (
                    <div key={assessment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{assessment.title}</h4>
                                    <p className="text-sm text-gray-500">{assessment.subject} • {assessment.grade} Grade</p>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    {assessment.questions.length} Qs
                                </span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end space-x-2">
                                <button
                                    onClick={() => openModal(assessment)}
                                    className="p-2 text-gray-400 hover:text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
                                >
                                    <PencilIcon className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleDeleteAssessment(assessment.id)}
                                    className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsModalOpen(false)}></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">{currentAssessment ? 'Edit Assessment' : 'New Assessment'}</h3>

                                {/* Meta Data */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Title</label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Grade Level</label>
                                        <select
                                            value={formData.grade}
                                            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                        >
                                            <option value="">Select Grade</option>
                                            {[...Array(12).keys()].map(i => <option key={i} value={`${i + 1}th`}>{i + 1}th Grade</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Question Builder */}
                                <div className="border-t border-gray-200 pt-4">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3">Questions</h4>

                                    {/* List of existing questions */}
                                    <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                                        {formData.questions.map((q, idx) => (
                                            <div key={q.id} className="flex justify-between items-start bg-gray-50 p-3 rounded-md">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <span className="text-gray-500 mr-2">#{idx + 1}</span>
                                                        {q.text}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1 capitalize">Type: {q.type.replace('_', ' ')}</p>
                                                    {q.options && (
                                                        <p className="text-xs text-gray-400">Options: {q.options.join(', ')}</p>
                                                    )}
                                                </div>
                                                <button onClick={() => handleDeleteQuestion(q.id)} className="text-red-500 hover:text-red-700">
                                                    <TrashIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                        {formData.questions.length === 0 && (
                                            <p className="text-sm text-gray-500 italic text-center py-2">No questions added yet.</p>
                                        )}
                                    </div>

                                    {/* Add New Question */}
                                    <div className="bg-purple-50 p-4 rounded-md">
                                        <p className="text-xs font-semibold text-purple-700 uppercase mb-2">Add New Question</p>
                                        <div className="grid grid-cols-1 gap-3">
                                            <input
                                                type="text"
                                                placeholder="Question text"
                                                value={newQuestion.text}
                                                onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                                            />
                                            <div className="grid grid-cols-2 gap-3">
                                                <select
                                                    value={newQuestion.type}
                                                    onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
                                                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                                                >
                                                    <option value="text">Text Answer</option>
                                                    <option value="multiple_choice">Multiple Choice</option>
                                                    <option value="scale">Rating Scale (1-5)</option>
                                                </select>
                                                {newQuestion.type === 'multiple_choice' && (
                                                    <input
                                                        type="text"
                                                        placeholder="Options (comma separated)"
                                                        value={newQuestion.options}
                                                        onChange={(e) => setNewQuestion({ ...newQuestion, options: e.target.value })}
                                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                                                    />
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleAddQuestion}
                                                disabled={!newQuestion.text}
                                                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 disabled:opacity-50"
                                            >
                                                <PlusIcon className="w-4 h-4 mr-2" /> Add Question
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    onClick={handleSaveAssessment}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Save Assessment
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
