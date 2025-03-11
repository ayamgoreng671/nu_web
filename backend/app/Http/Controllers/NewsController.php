<?php
namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    public function index()
    {
        return response()->json(News::with('category', 'user')->latest()->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'required|exists:categories,id',
            'image' => 'image|max:2048',
        ]);

        $imagePath = $request->file('image') ? $request->file('image')->store('images', 'public') : null;

        News::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imagePath,
            'category_id' => $request->category_id,
            'user_id' => Auth::id(),
        ]);

        return response()->json(['message' => 'News created successfully']);
    }

    public function show($id)
    {
        return response()->json(News::with('category', 'user')->findOrFail($id));
    }

    public function update(Request $request, News $news)
    {
        $this->authorize('update', $news);
        $news->update($request->all());
        return response()->json(['message' => 'News updated successfully']);
    }

    public function destroy(News $news)
    {
        $this->authorize('delete', $news);
        $news->delete();
        return response()->json(['message' => 'News deleted successfully']);
    }
}
