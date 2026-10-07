import { useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Image from '@tiptap/extension-image'

export default function RichEditor() {
    const fileRef = useRef(null)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline, // remove this line if you're on Tiptap v3 (already in StarterKit)
            Superscript,
            Subscript,
            Image,
            TextAlign.configure({ types: ['paragraph', 'heading'] }),
        ],
        shouldRerenderOnTransaction: true,
        editorProps: {
            attributes: {
                class: `min-h-72 max-h-120 overflow-y-auto p-4 text-sm outline-none
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
                    [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2`,
            },
        },
    })

    if (!editor) return null

    const c = () => editor.chain().focus()

    const groups = [
        [
            { icon: 'ph-text-b', run: () => c().toggleBold().run(), on: editor.isActive('bold') },
            { icon: 'ph-text-italic', run: () => c().toggleItalic().run(), on: editor.isActive('italic') },
            { icon: 'ph-text-underline', run: () => c().toggleUnderline().run(), on: editor.isActive('underline') },
            { icon: 'ph-text-strikethrough', run: () => c().toggleStrike().run(), on: editor.isActive('strike') },
        ],
        [
            { icon: 'ph-text-align-left', run: () => c().setTextAlign('left').run(), on: editor.isActive({ textAlign: 'left' }) },
            { icon: 'ph-text-align-center', run: () => c().setTextAlign('center').run(), on: editor.isActive({ textAlign: 'center' }) },
            { icon: 'ph-text-align-right', run: () => c().setTextAlign('right').run(), on: editor.isActive({ textAlign: 'right' }) },
            { icon: 'ph-text-align-justify', run: () => c().setTextAlign('justify').run(), on: editor.isActive({ textAlign: 'justify' }) },
        ],
        [
            { icon: 'ph-list-bullets', run: () => c().toggleBulletList().run(), on: editor.isActive('bulletList') },
            { icon: 'ph-list-numbers', run: () => c().toggleOrderedList().run(), on: editor.isActive('orderedList') },
        ],
        [
            { icon: 'ph-scissors', run: () => { editor.commands.focus(); document.execCommand('cut') } },
            { icon: 'ph-copy', run: () => { editor.commands.focus(); document.execCommand('copy') } },
        ],
        [
            { icon: 'ph-text-superscript', run: () => c().toggleSuperscript().run(), on: editor.isActive('superscript') },
            { icon: 'ph-text-subscript', run: () => c().toggleSubscript().run(), on: editor.isActive('subscript') },
        ],
    ]

    const addImage = (e) => {
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = () => c().setImage({ src: reader.result }).run()
        reader.readAsDataURL(file)
        e.target.value = ''
    }

    return (
        <div className='border border-border-10 rounded-2xl overflow-hidden bg-muted-bg'>
            <div className='flex items-center gap-4 flex-wrap p-2 px-4 border-b border-border-10'>
                {groups.map((g, gi) => (
                    <div key={gi} className='flex items-center gap-1'>
                        {g.map((t) => (
                            <button
                                key={t.icon}
                                type='button'
                                onMouseDown={(e) => { e.preventDefault(); t.run() }}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg text-lg cursor-pointer transition-colors ${t.on ? 'bg-blue-100 text-blue-600' : 'text-blue-500 hover:bg-blue-50'}`}
                            >
                                <i className={`ph ${t.icon}`}></i>
                            </button>
                        ))}
                    </div>
                ))}

                <button
                    type='button'
                    onMouseDown={(e) => { e.preventDefault(); fileRef.current.click() }}
                    className='w-8 h-8 flex items-center justify-center rounded-lg text-lg text-blue-500 hover:bg-blue-50 cursor-pointer'
                >
                    <i className='ph ph-image'></i>
                </button>
                <input ref={fileRef} type='file' accept='image/*' hidden onChange={addImage} />
            </div>

            <EditorContent editor={editor} />
        </div>
    )
}