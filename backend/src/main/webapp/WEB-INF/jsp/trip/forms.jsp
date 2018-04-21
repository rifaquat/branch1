<div class="contentpanel">

    <!--\\\\\\\ contentpanel start\\\\\\-->
    <div class="pull-left breadcrumb_admin clear_both">
        <div class="pull-left page_title theme_color">
            <h1>Driver</h1>
        </div>
    </div>
    <div class="container clear_both padding_fix">
        <!--\\\\\\\ container  start \\\\\\-->


        <div class="row">

            <div class="col-lg-7 col-lg-offset-2">
                <form id="beat-assignment-form">
                    <section class="panel default blue_title h2">
                        <div class="panel-heading">Assign Beats</div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Beats</label>
                                        <select id="beats" name="area" class="form-control">
                                            <option value="-1">Select Beat</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Salesman</label>
                                                <select id="drivers" name="drivers" class="form-control">
                                                    <option value="-1">Select Salesman</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Vehicles</label>
                                        <select id="vehicles" name="vehicles" class="form-control">
                                            <option value="-1">Select Vehicle</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Chilled Bottles</label>
                                        <input type="text" id="chilled-bottles" name="chilledbottle" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Normal Bottles</label>
                                        <input type="text" id="normal-bottles" name="normalbottle" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Helper Name</label>
                                        <input type="text" id="helpername" name="helpername" class="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Helper Number</label>
                                        <input type="text" id="helpernumber" name="helpernumber" class="form-control" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="panel-body">
                            <div class="pull-left">
                                <button id="assign-beat" type="submit" class="btn btn-primary btn-icon glyphicons envelope"><i></i> SAVE</button>
                                <button id="modify-assigned-beat" type="submit" class="btn btn-primary btn-icon glyphicons envelope"><i></i> SAVE</button>
                                <button id="cancel" type="reset" class="btn btn-primary btn-icon glyphicons envelope"><i></i> CANCEL</button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>

    </div>
    <!--\\\\\\\ container  end \\\\\\-->
</div>
<!--\\\\\\\ content panel end \\\\\\-->